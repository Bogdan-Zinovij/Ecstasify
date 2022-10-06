'use strict';

const getAllTracksService = require('../services/getAllTracksService');

class TrackController {
  async getAll(req, res) {
    try {
      const tracks = await getAllTracksService();
      res.status(200).json(tracks);
    } catch (err) {
      res.status(400).send();
    }
  }
}

module.exports = new TrackController();
