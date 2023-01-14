'use strict';

const { Playlists } = require('../db/models/Playlists');
const { v4: uuid } = require('uuid');
const { errorMessages } = require('../config');

class PlaylistService {
  async getPlaylists() {
    return Playlists.findAll({ order: ['id'] });
  }

  async getPlaylistById(id) {
    const playlist = await Playlists.findOne({ where: { id } });

    if (!playlist) throw new Error(errorMessages.PLAYLIST_NOT_EXISTS_ID);

    return playlist;
  }

  async createPlaylist(playlistData) {
    const newPlaylist = { ...playlistData, id: uuid() };

    return Playlists.create(newPlaylist);
  }

  async updatePlaylist(id, playlistData) {
    const playlist = await Playlists.findOne({ where: { id } });
    if (!playlist) throw new Error(errorMessages.PLAYLIST_NOT_EXISTS_ID);

    await Playlists.update(playlistData, { where: { id } });

    return this.getPlaylistById(id);
  }

  async deletePlaylist(id) {
    const playlist = await Playlists.findOne({ where: { id } });

    if (!playlist) throw new Error(errorMessages.PLAYLIST_NOT_EXISTS_ID);

    const deleteResult = await Playlists.destroy({ where: { id } });
    if (!deleteResult) throw new Error(errorMessages.PLAYLIST_DELETION_FAILED);

    return playlist;
  }
}

module.exports = { playlistService: new PlaylistService() };
