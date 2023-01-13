'use strict'

const Router = require('express');
const genreController = require('../controllers/genreController');

const genreRouter = new Router();

genreRouter
  .get('/', genreController.getGenres)
  .get('/:id', genreController.getGenreById)
  .post('/', genreController.createGenre)
  .patch('/:id', genreController.updateGenre)
  .delete('/:id', genreController.deleteGenre);

module.exports = genreRouter;
