'use strict'

const Router = require('express');
const playlistTrackController = require('../controllers/playlistTrackController');

const playlistTrackRouter = new Router();

playlistTrackRouter
  .get('/', playlistTrackController.getPlaylistTracks)
  .get('/:id', playlistTrackController.getPlaylistTrackById)
  .get('/playlist/:id', playlistTrackController.getPlaylistTracksByPlaylistId)
  .post('/', playlistTrackController.createPlaylistTrack)
  .patch('/:id', playlistTrackController.updatePlaylistTrack)
  .delete('/', playlistTrackController.deletePlaylistTrackFromPlaylist);

module.exports = playlistTrackRouter;
