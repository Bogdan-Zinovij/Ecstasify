import { User } from '@/models/user';
import BaseService from './base.service';

class UsersService extends BaseService {
  getAllUsers = () => {
    return this.httpRequest.get<User[]>('/users');
  };

  createUser = (data: User) => {
    return this.httpRequest.post<User>('/users', data);
  };

  updateUser = (userId: User['id'], data: User) => {
    return this.httpRequest.patch<User>(`/users/${userId}`, data);
  };

  deleteUser = (userId: string) => {
    return this.httpRequest.delete<User>(`/users/${userId}`);
  };
}

export default UsersService;
