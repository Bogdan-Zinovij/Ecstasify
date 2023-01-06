'use strict';

const { trackService } = require('../services/index');

class TrackController {
  async getTracks(req, res) {
    try {
      const tracks = await trackService.getTracks();
      res.status(200).json(tracks);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  async getTrackById(req, res) {
    try {
      const { id } = req.params;
      const track = await trackService.getTrackById(id);
      res.status(200).json(track);
    } catch (err) {
      console.log(err);
      res.status(404).json({ message: err.message });
    }
  }

  async createTrack(req, res) {
    try {
      const trackData = req.body;
      const createdTrack = await trackService.createTrack(trackData);
      res.status(201).json(createdTrack);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async updateTrack(req, res) {
    try {
      const { id } = req.params;
      const trackData = req.body;
      const updatedTrack = await trackService.updateTrack(id, trackData);
      res.status(200).json(updatedTrack);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  async deleteTrack(req, res) {
    try {
      const { id } = req.params;
      const deletedTrack = await trackService.deleteTrack(id);
      res.status(200).json(deletedTrack);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  async postBrockenRequest(req, res) {
    try {
      const data = await trackService.postBrockenRequest();
      res.status(200).json({ result: 'success', data });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new TrackController();
