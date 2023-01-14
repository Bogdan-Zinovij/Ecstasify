'use strict'

const Router = require('express');
const trackController = require('../controllers/trackController');

const trackRouter = new Router();

trackRouter
  .get('/', trackController.getTracks)
  .get('/:id', trackController.getTrackById)
  .post('/', trackController.createTrack)
  .patch('/:id', trackController.updateTrack)
  .delete('/:id', trackController.deleteTrack);

module.exports = trackRouter;
