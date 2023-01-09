import AuthorsService from './authors.service';
import TracksService from './tracks.service';
import UsersService from './users.service';

export class RootService {
  usersService = new UsersService();
  authorsService = new AuthorsService();
  tracksService = new TracksService();
}
