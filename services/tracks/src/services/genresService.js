'use strict'

const { v4: uuid } = require('uuid');
const { Genres } = require('../db/models/Genres');

class GenreService {
  async getGenres() {
    const genres = await Genres.findAll({ order: ['id'] });
    return genres;
  }

  async getGenreById(id) {
    const genre = await Genres.findOne({ where: { id } });

    if (!genre) throw new Error('Genre with the specified ID does not exist');

    return genre;
  }

  async createGenre(genreData) {
    const genreID = uuid();
    genreData.id = genreID;

    const createdGenre = await Genres.create(genreData);

    return createdGenre;
  }

  async updateGenre(id, genreData) {
    const genre = await Genres.findOne({ where: { id } });
    if (!genre) throw new Error('Genre with the specified ID does not exist');

    await Genres.update(genreData, { where: { id } });

    return this.getGenreById(id);
  }

  async deleteGenre(id) {
    const genre = await Genres.findOne({ where: { id } });

    if (!genre) throw new Error('Genre with the specified ID does not exist');

    const deleteResult = await Genres.destroy({ where: { id } });
    if (!deleteResult)
      throw new Error('Failed to delete a genre with specified ID');

    return genre;
  }
}

module.exports = { genreService: new GenreService() };
