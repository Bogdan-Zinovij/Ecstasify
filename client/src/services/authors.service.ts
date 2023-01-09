import { Author } from '@/models/author';
import BaseService from './base.service';

class AuthorsService extends BaseService {
  getAllAuthors = () => {
    return this.httpRequest.get<Author[]>('/authors');
  };

  createAuthor = (data: Author) => {
    return this.httpRequest.post<Author>('/authors', data);
  };

  updateAuthor = (authorId: Author['id'], data: Author) => {
    return this.httpRequest.patch<Author>(`/authors/${authorId}`, data);
  };

  deleteAuthor = (authorId: string) => {
    return this.httpRequest.delete<Author>(`/authors/${authorId}`);
  };
}

export default AuthorsService;
