'use strict';

const Router = require('express');
const playlistController = require('../controllers/playlistController');

const playlistRouter = new Router();

playlistRouter
  .get('/', playlistController.getPlaylists)
  .get('/:id', playlistController.getPlaylistById)
  .post('/', playlistController.createPlaylist)
  .patch('/:id', playlistController.updatePlaylist)
  .delete('/:id', playlistController.deletePlaylist);

module.exports = playlistRouter;
