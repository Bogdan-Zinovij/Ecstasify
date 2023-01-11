'use strict';

import { Authors } from '../db/models/author.model.js';
import { v4 as uuid } from 'uuid';

class AuthorService {
  async getAuthors() {
    return await Authors.findAll({ order: ['id'] });
  }

  async getAuthorById(id) {
    const author = await Authors.findOne({ where: { id } });

    if (!author) throw new Error('Author with the specified ID does not exist');

    return author;
  }

  async createAuthor(authorData) {
    const authorID = uuid();
    authorData.id = authorID;
    return await Authors.create(authorData);
  }

  async updateAuthor(id, authorData) {
    const author = await Authors.findOne({ where: { id } });
    if (!author) throw new Error('Author with the specified ID does not exist');

    await Authors.update(authorData, { where: { id } });

    return await Authors.findOne({ where: { id } });
  }

  async deleteAuthor(id) {
    const author = await Authors.findOne({ where: { id } });

    if (!author) throw new Error('Author with the specified ID does not exist');

    const deleteResult = await Authors.destroy({ where: { id } });
    if (!deleteResult)
      throw new Error('Failed to delete a author with specified ID');

    return author;
  }
}

export default new AuthorService();
