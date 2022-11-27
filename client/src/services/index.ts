import httpRequest from '@/utils/request';
import AuthorsService from './authors.service';
import UsersService from './users.service';

export class RootService {
  usersService: UsersService = new UsersService(httpRequest);
  authorsService: AuthorsService = new AuthorsService(httpRequest);
}
