import { Author } from '@/models/author';
import { HttpRequest } from '@/utils/request';
import BaseService from './base.service';

class AuthorsService extends BaseService {
  constructor(httpRequest: HttpRequest) {
    super(httpRequest);
  }

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
