'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');
const { PREFIX } = require('./config');
const app = express();

app.use(bodyParser.json());
app
  .get(PREFIX + '/users', userController.getUsers)
  .get(PREFIX + '/users/:id', userController.getUserById)
  .post(PREFIX + '/users', userController.createUser)
  .patch(PREFIX + '/users/:id', userController.updateUser)
  .delete(PREFIX + '/users/:id', userController.deleteUser);

module.exports = app;
