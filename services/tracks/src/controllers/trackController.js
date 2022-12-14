'use strict';

const trackServices = require('../services/trackService');

class TrackController {
  async getTracks(req, res) {
    try {
      const tracks = await trackServices.getTracks();
      res.status(200).json(tracks);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  async getTrackById(req, res) {
    try {
      const { id } = req.params;
      const track = await trackServices.getTrackById(id);
      res.status(200).json(track);
    } catch (err) {
      console.log(err);
      res.status(404).json({ message: err.message });
    }
  }

  async createTrack(req, res) {
    try {
      const trackData = req.body;
      const createdTrack = await trackServices.createTrack(trackData);
      res.status(201).json(createdTrack);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async updateTrack(req, res) {
    try {
      const { id } = req.params;
      const trackData = req.body;
      const updatedTrack = await trackServices.updateTrack(id, trackData);
      res.status(200).json(updatedTrack);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  async deleteTrack(req, res) {
    try {
      const { id } = req.params;
      const deletedTrack = await trackServices.deleteTrack(id);
      res.status(200).json(deletedTrack);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
}

module.exports = new TrackController();
