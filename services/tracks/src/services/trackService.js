'use strict';

const { Tracks } = require('../db/models/Tracks');
const { Genres } = require('../db/models/Genres');
const { v4: uuid } = require('uuid');
const { axiosClient } = require('../config/axios.config');
const { kafkaTopics } = require('../constants');

class TrackService {
  notificationProducer;

  constructor(notificationProducer) {
    this.notificationProducer = notificationProducer;
    this.setup();
  }

  async setup() {
    try {
      await this.notificationProducer.connect();
    } catch (err) {
      console.error("Error while connecting to kafka: " + err);
    }
  }

  async getTracks() {
    const tracks = await Tracks.findAll({ include: Genres });
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
    const track = await Tracks.findOne({ where: { id }, include: Genres });

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

    await this.notificationProducer.send({
      topic: kafkaTopics.NEW_TRACK,
      messages: [{ value: JSON.stringify(createdTrack) }]
    });

    return this.getTrackById(trackID);
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

  async postBrokenRequest() {
    await axiosClient.post('authors/broken').catch((err) => {
      console.log(err);
      throw new Error('Failed to fetch');
    });
    return 'No error occurred';
  }
}

module.exports = { TrackService };
