'use strict';

const { Tracks } = require('../db/models/Tracks');
const { v4: uuid } = require('uuid');

class TrackServices {
  async getTracks() {
    return await Tracks.findAll({ order: ['id'] });
  }

  async getTrackById(id) {
    const track = await Tracks.findOne({ where: { id } });

    if (!track) throw new Error('Track with the specified ID does not exist');

    return track;
  }

  async createTrack(trackData) {
    const trackID = uuid();
    trackData.id = trackID;
    return await Tracks.create(trackData);
  }

  async updateTrack(id, trackData) {
    const track = await Tracks.findOne({ where: { id } });
    if (!track) throw new Error('Track with the specified ID does not exist');

    await Tracks.update(trackData, { where: { id } });

    return await Tracks.findOne({ where: { id } });
  }

  async deleteTrack(id) {
    const track = await Tracks.findOne({ where: { id } });

    if (!track) throw new Error('Track with the specified ID does not exist');

    const deleteResult = await Tracks.destroy({ where: { id } });
    if (!deleteResult)
      throw new Error('Failed to delete a track with specified ID');

    return track;
  }
}

module.exports = new TrackServices();
