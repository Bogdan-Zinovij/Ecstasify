'use strict';

const { Tracks } = require('../db/models/Tracks');
const { v4: uuid } = require('uuid');
const { axiosClient } = require('../config/axios.config');

class TrackServices {
  async getTracks() {
    const tracks = await Tracks.findAll({ order: ['id'] });
    const trackAuthors = await this.getAllTracksAuthors();

    for (const track of tracks) {
      const matchedTrackAuthor = trackAuthors.filter(
        (author) => author.id === track.author
      );

      if (matchedTrackAuthor.length === 0) {
        throw new Error('Author not found!');
      }
      track.author = matchedTrackAuthor[0];
    }

    return tracks;
  }

  async getTrackById(id) {
    const track = await Tracks.findOne({ where: { id } });

    if (!track) throw new Error('Track with the specified ID does not exist');

    const author = await this.getTrackAuthor(track.author);
    track.author = author;

    return track;
  }

  async createTrack(trackData) {
    const trackID = uuid();
    trackData.id = trackID;

    const author = await this.getTrackAuthor(trackData.author);

    const createdTrack = await Tracks.create(trackData);
    createdTrack.author = author;

    return createdTrack;
  }

  async updateTrack(id, trackData) {
    const track = await Tracks.findOne({ where: { id } });
    if (!track) throw new Error('Track with the specified ID does not exist');

    if (trackData.author) await this.getTrackAuthor(trackData.author);

    await Tracks.update(trackData, { where: { id } });

    return this.getTrackById(id);
  }

  async deleteTrack(id) {
    const track = await Tracks.findOne({ where: { id } });

    if (!track) throw new Error('Track with the specified ID does not exist');

    const deleteResult = await Tracks.destroy({ where: { id } });
    if (!deleteResult)
      throw new Error('Failed to delete a track with specified ID');

    return track;
  }

  async getTrackAuthor(trackAuthorId) {
    const trackAuthorRes = await axiosClient
      .get(`authors/${trackAuthorId}`)
      .catch((err) => {
        console.log(err);
        throw new Error('Author not found!');
      });

    const trackAuthor = trackAuthorRes?.data;
    if (!trackAuthor) {
      throw new Error('Author not found!');
    }

    return trackAuthor;
  }

  async getAllTracksAuthors() {
    const allTracksAuthorsRes = await axiosClient
      .get('authors')
      .catch((err) => {
        console.log(err);
        throw new Error('Authors not found!');
      });

    const allTracksAuthors = allTracksAuthorsRes?.data;

    if (!allTracksAuthors) {
      throw new Error('Authors not found!');
    }

    return allTracksAuthors;
  }

  async postBrockenRequest() {
    await axiosClient.post('authors/broken').catch((err) => {
      console.log(err);
      throw new Error('Failed to fetch');
    });
    return 'No error occurred';
  }
}

module.exports = new TrackServices();
