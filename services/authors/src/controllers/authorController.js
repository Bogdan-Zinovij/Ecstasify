import authorServices from '../services/authorServices.js';

class AuthorController {
  async getAuthors(req, res) {
    try {
      const authors = await authorServices.getAuthors();
      res.status(200).json(authors);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  async getAuthorById(req, res) {
    try {
      const { id } = req.params;
      const author = await authorServices.getAuthorById(id);
      res.status(200).json(author);
    } catch (err) {
      console.log(err);
      res.status(404).json({ message: err.message });
    }
  }

  async createAuthor(req, res) {
    try {
      const authorData = req.body;
      const createdAuthor = await authorServices.createAuthor(authorData);
      res.status(201).json(createdAuthor);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async updateAuthor(req, res) {
    try {
      const { id } = req.params;
      const authorData = req.body;
      const updatedAuthor = await authorServices.updateAuthor(id, authorData);
      res.status(200).json(updatedAuthor);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  async deleteAuthor(req, res) {
    try {
      const { id } = req.params;
      const deletedAuthor = await authorServices.deleteAuthor(id);
      res.status(200).json(deletedAuthor);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
}

export default new AuthorController();
