import { Authors } from '../db/models/author.model.js';
import { v4 as uuid } from 'uuid';
import { errorMessages } from '../config.js';
import { HttpException } from '../errors-handling/custom-errors.js';

class AuthorService {
  async getAuthors() {
    return Authors.findAll({ order: ['id'] });
  }

  async getAuthorById(id) {
    const author = await Authors.findOne({ where: { id } });
    if (!author) throw new HttpException(400, errorMessages.AUTHOR_NOT_EXISTS);

    return author;
  }

  async createAuthor(authorData) {
    const author = await Authors.findOne({ where: { name: authorData.name } });
    if (author)
      throw new HttpException(400, errorMessages.AUTHOR_ALREADY_EXISTS);

    const newAuthor = { ...authorData, id: uuid() };

    return Authors.create(newAuthor);
  }

  async updateAuthor(id, authorData) {
    const author = await Authors.findOne({ where: { id } });
    if (!author) throw new HttpException(400, errorMessages.AUTHOR_NOT_EXISTS);

    await Authors.update(authorData, { where: { id } });

    return Authors.findOne({ where: { id } });
  }

  async deleteAuthor(id) {
    const author = await Authors.findOne({ where: { id } });
    if (!author) throw new HttpException(400, errorMessages.AUTHOR_NOT_EXISTS);

    await Authors.destroy({ where: { id } });

    return author;
  }
}

export default new AuthorService();
