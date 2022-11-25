'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const authorController = require('./controllers/authorController');
const { PREFIX } = require('./config');
const app = express();

app.use(bodyParser.json());
app
  .get(PREFIX + '/authors', authorController.getAuthors)
  .get(PREFIX + '/authors/:id', authorController.getAuthorById)
  .post(PREFIX + '/authors', authorController.createAuthor)
  .post(PREFIX + '/authors/broken', authorController.breakRequest)
  .patch(PREFIX + '/authors/:id', authorController.updateAuthor)
  .delete(PREFIX + '/authors/:id', authorController.deleteAuthor);

module.exports = app;
