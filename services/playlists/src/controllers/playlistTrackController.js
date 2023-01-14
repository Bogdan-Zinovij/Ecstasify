'use strict';

const { playlistTrackService } = require('../services/playlistTrackService');

class PlaylistController {
  async getPlaylistTracks(req, res) {
    try {
      const playlistTracks = await playlistTrackService.getPlaylistTracks();
      res.status(200).json(playlistTracks);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  async getPlaylistTrackById(req, res) {
    try {
      const { id } = req.params;
      const playlistTrack = await playlistTrackService.getPlaylistTrackById(id);
      res.status(200).json(playlistTrack);
    } catch (err) {
      console.log(err);
      res.status(404).json({ message: err.message });
    }
  }

  async getPlaylistTracksByPlaylistId(req, res) {
    try {
      const { id } = req.params;
      const playlistTracks =
        await playlistTrackService.getPlaylistTracksByPlaylistId(id);
      res.status(200).json(playlistTracks);
    } catch (err) {
      console.log(err);
      res.status(404).json({ message: err.message });
    }
  }

  async getPlaylistTracksById(req, res) {
    try {
      const { id } = req.params;
      const playlistTrack = await playlistTrackService.getPlaylistTracksById(
        id
      );
      res.status(200).json(playlistTrack);
    } catch (err) {
      console.log(err);
      res.status(404).json({ message: err.message });
    }
  }

  async createPlaylistTrack(req, res) {
    try {
      const playlistTrackData = req.body;
      const createdPlaylistTrack =
        await playlistTrackService.createPlaylistTrack(playlistTrackData);
      res.status(201).json(createdPlaylistTrack);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async updatePlaylistTrack(req, res) {
    try {
      const { id } = req.params;
      const playlistTrackData = req.body;
      const updatedPlaylistTrack =
        await playlistTrackService.updatePlaylistTrack(id, playlistTrackData);
      res.status(200).json(updatedPlaylistTrack);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  async deletePlaylistTrackFromPlaylist(req, res) {
    try {
      const playlistTrackData = req.body;
      const deletedPlaylistTrack =
        await playlistTrackService.deletePlaylistTrackFromPlaylist(
          playlistTrackData
        );
      res.status(200).json(deletedPlaylistTrack);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
}

module.exports = new PlaylistController();
