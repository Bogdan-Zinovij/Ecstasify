'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const trackController = require('./controllers/trackController');
const { PREFIX } = require('./config');
const app = express();

app.use(bodyParser.json());
app.get(PREFIX + '/tracks', trackController.getAll);

module.exports = app;
