'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');
const { PREFIX } = require('./config');
const app = express();

app.use(bodyParser.json());
app.get(PREFIX + '/users', userController.getAll);

module.exports = app;
