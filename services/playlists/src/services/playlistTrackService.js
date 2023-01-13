'use strict';

const { PlaylistTracks } = require('../db/models/PlaylistTracks.js');
const { v4: uuid } = require('uuid');
const { errorMessages } = require('../config');
const { axiosClient } = require('../config/axios.config');

class PlaylistTrackService {
  async getPlaylistTracks() {
    return PlaylistTracks.findAll({ order: ['id'] });
  }

  async getPlaylistTracksByPlaylistId(id) {
    const playlistTracks = await PlaylistTracks.findAll({ where: { playlistId: id } });

    if (!playlistTracks) throw new Error(errorMessages.PLAYLIST_TRACK_NOT_EXISTS_ID);

    const tracks = [];
    for (let i = 0; i < playlistTracks.length; i++) {
      const elem = playlistTracks[i];
      const track = await this.getPlaylistTrack(elem.trackId);
      tracks.push(track);
    }

    return tracks;
  }

  async getPlaylistTrackById(id) {
    const playlistTrack = await PlaylistTracks.findOne({ where: { id } });

    if (!playlistTrack) throw new Error(errorMessages.PLAYLIST_TRACK_NOT_EXISTS_ID);

    return playlistTrack;
  }

  async createPlaylistTrack(playlistTrackData) {
    const newPlaylistTrack = { ...playlistTrackData, id: uuid() };
    
    return PlaylistTracks.create(newPlaylistTrack);
  }

  async updatePlaylistTrack(id, playlistTrackData) {
    const playlistTrack = await PlaylistTracks.findOne({ where: { id } });
    if (!playlistTrack) throw new Error(errorMessages.PLAYLIST_TRACK_NOT_EXISTS_ID);

    await PlaylistTracks.update(playlistTrackData, { where: { id } });

    return this.getPlaylistById(id);
  }

  async deletePlaylistTrackFromPlaylist(playlistTrackData) {
    const { playlistId, trackId } = playlistTrackData;
    const playlistTrack = await PlaylistTracks.findOne({ where: { playlistId, trackId } });

    if (!playlistTrack) throw new Error(errorMessages.PLAYLIST_TRACK_NOT_EXISTS_ID);

    const deleteResult = await PlaylistTracks.destroy({ where: { playlistId, trackId } });
    if (!deleteResult)
      throw new Error(errorMessages.PLAYLIST_TRACK_DELETION_FAILED);

    return playlistTrack;
  }

  async getPlaylistTrack(playlistTrackId) {
    const playlistTrackRes = await axiosClient
      .get(`tracks/${playlistTrackId}`)
      .catch((err) => {
        console.log(err);
        throw new Error(errorMessages.AUTHOR_NOT_FOUND);
      });

    const playlistTrack = playlistTrackRes?.data;
    if (!playlistTrack) {
      throw new Error(errorMessages.AUTHOR_NOT_FOUND);
    }

    return playlistTrack;
  }
}

module.exports = { playlistTrackService: new PlaylistTrackService() };
