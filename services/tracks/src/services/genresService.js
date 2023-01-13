'use strict'

const { v4: uuid } = require('uuid')
const { Genres } = require('../db/models/Genres')
const { errorMessages } = require('../config')

class GenreService {
  async getGenres() {
    return Genres.findAll({ order: ['id'] })
  }

  async getGenreById(id) {
    const genre = await Genres.findOne({ where: { id } })

    if (!genre) throw new Error(errorMessages.GENRE_NOT_EXISTS_ID)

    return genre
  }

  async createGenre(genreData) {
    const genreID = uuid()
    genreData.id = genreID

    return Genres.create(genreData)
  }

  async updateGenre(id, genreData) {
    const genre = await Genres.findOne({ where: { id } })
    if (!genre) throw new Error(errorMessages.GENRE_NOT_EXISTS_ID)

    await Genres.update(genreData, { where: { id } })

    return this.getGenreById(id)
  }

  async deleteGenre(id) {
    const genre = await Genres.findOne({ where: { id } })

    if (!genre) throw new Error(errorMessages.GENRE_NOT_EXISTS_ID)

    const deleteResult = await Genres.destroy({ where: { id } })
    if (!deleteResult) {
      throw new Error(errorMessages.GENRE_DELETION_FAILED)
    }

    return genre
  }
}

module.exports = { genreService: new GenreService() }
