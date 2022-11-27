import httpRequest from '@/utils/request';
import AuthorsService from './authors.service';
import TracksService from './tracks.service';
import UsersService from './users.service';

export class RootService {
  usersService = new UsersService(httpRequest);
  authorsService = new AuthorsService(httpRequest);
  tracksService = new TracksService(httpRequest);
}
