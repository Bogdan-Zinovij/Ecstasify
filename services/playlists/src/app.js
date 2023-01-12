'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const playlistController = require('./controllers/playlistController');
const { PREFIX } = require('./config');
const app = express();

app.use(bodyParser.json());
app.use(cors());

app
  .get(PREFIX + '/playlists', playlistController.getPlaylists)
  .get(PREFIX + '/playlists/:id', playlistController.getPlaylistById)
  .post(PREFIX + '/playlists', playlistController.createPlaylist)
  .patch(PREFIX + '/playlists/:id', playlistController.updatePlaylist)
  .delete(PREFIX + '/playlists/:id', playlistController.deletePlaylist);

module.exports = app;
