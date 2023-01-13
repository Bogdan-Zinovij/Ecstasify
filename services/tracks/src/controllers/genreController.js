'use strict'

const { genreService } = require('../services/genresService')

class GenreController {
  async getGenres(req, res) {
    try {
      const genres = await genreService.getGenres()
      res.status(200).json(genres)
    } catch (err) {
      res.status(404).json({ message: err.message })
    }
  }

  async getGenreById(req, res) {
    try {
      const { id } = req.params
      const genre = await genreService.getGenreById(id)
      res.status(200).json(genre)
    } catch (err) {
      console.log(err)
      res.status(404).json({ message: err.message })
    }
  }

  async createGenre(req, res) {
    try {
      const genreData = req.body
      const createdGenre = await genreService.createGenre(genreData)
      res.status(201).json(createdGenre)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  }

  async updateGenre(req, res) {
    try {
      const { id } = req.params
      const genreData = req.body
      const updatedGenre = await genreService.updatedGenre(id, genreData)
      res.status(200).json(updatedGenre)
    } catch (err) {
      res.status(404).json({ message: err.message })
    }
  }

  async deleteGenre(req, res) {
    try {
      const { id } = req.params
      const deletedGenre = await genreService.deletedGenre(id)
      res.status(200).json(deletedGenre)
    } catch (err) {
      res.status(404).json({ message: err.message })
    }
  }
}

module.exports = new GenreController()
