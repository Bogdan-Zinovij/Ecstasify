'use strict';

const { playlistService } = require('../services/playlistService');

class PlaylistController {
  async getPlaylists(req, res) {
    try {
      const tracks = await playlistService.getPlaylists();
      res.status(200).json(tracks);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  async getPlaylistById(req, res) {
    try {
      const { id } = req.params;
      const track = await playlistService.getPlaylistById(id);
      res.status(200).json(track);
    } catch (err) {
      console.log(err);
      res.status(404).json({ message: err.message });
    }
  }

  async createPlaylist(req, res) {
    try {
      const trackData = req.body;
      const createdTrack = await playlistService.createPlaylist(trackData);
      res.status(201).json(createdTrack);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async updatePlaylist(req, res) {
    try {
      const { id } = req.params;
      const trackData = req.body;
      const updatedTrack = await playlistService.updatePlaylist(id, trackData);
      res.status(200).json(updatedTrack);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  async deletePlaylist(req, res) {
    try {
      const { id } = req.params;
      const deletedTrack = await playlistService.deletePlaylist(id);
      res.status(200).json(deletedTrack);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
}

module.exports = new PlaylistController();
