import { validationResult } from 'express-validator';
import authorService from '../services/author.service.js';

class AuthorController {
  async getAuthors(req, res) {
    try {
      const authors = await authorService.getAuthors();
      res.status(200).json(authors);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  async getAuthorById(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { id } = req.params;
      const author = await authorService.getAuthorById(id);
      res.status(200).json(author);
    } catch (err) {
      console.log(err);
      res.status(404).json({ message: err.message });
    }
  }

  async createAuthor(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const authorData = req.body;
      const createdAuthor = await authorService.createAuthor(authorData);
      res.status(201).json(createdAuthor);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async updateAuthor(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { id } = req.params;
      const authorData = req.body;
      const updatedAuthor = await authorService.updateAuthor(id, authorData);
      res.status(200).json(updatedAuthor);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  async deleteAuthor(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { id } = req.params;
      const deletedAuthor = await authorService.deleteAuthor(id);
      res.status(200).json(deletedAuthor);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
}

export default new AuthorController();
