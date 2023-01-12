'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const playlistTracksRouter = require('./routers/playlistTracksRouter');
const playlistsRouter = require('./routers/playlistsRouter');
const { PREFIX } = require('./config');
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(PREFIX + '/playlists/playlistTracks', playlistTracksRouter);
app.use(PREFIX + '/playlists', playlistsRouter);

module.exports = app;
