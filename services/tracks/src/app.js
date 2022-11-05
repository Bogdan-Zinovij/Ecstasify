'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const trackController = require('./controllers/trackController');
const { PREFIX } = require('./config');
const app = express();

app.use(bodyParser.json());
app
  .get(PREFIX + '/tracks', trackController.getTracks)
  .get(PREFIX + '/tracks/:id', trackController.getTrackById)
  .post(PREFIX + '/tracks', trackController.createTrack)
  .patch(PREFIX + '/tracks/:id', trackController.updateTrack)
  .delete(PREFIX + '/tracks/:id', trackController.deleteTrack);

module.exports = app;
