import httpRequest from '@/utils/request';
import UsersService from './users.service';

export class RootService {
  usersService: UsersService;

  constructor() {
    this.usersService = new UsersService(httpRequest);
  }
}
