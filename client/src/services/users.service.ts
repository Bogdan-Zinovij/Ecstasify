import { User } from '@/models/user';
import BaseService from './base.service';

export type SignUpRequest = {
  name: string;
  password: string;
  email: string;
};

export type SignUpResponse = {
  accessToken: string;
  refreshToken: string;
  user: User;
};

class UsersService extends BaseService {
  getUser = (id: User['id']) => {
    return this.httpRequest.get<User>(`/users/${id}`);
  };

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

  signUp = (data: SignUpRequest) => {
    return this.httpRequest.post<SignUpResponse>(
      '/users/auth/sign-up',
      data,
      false
    );
  };

  signIn = (data: SignUpRequest) => {
    return this.httpRequest.post<SignUpResponse>(
      '/users/auth/sign-in',
      data,
      false
    );
  };

  signOut = (data: SignUpRequest) => {
    return this.httpRequest.post<SignUpResponse>('/users/auth/sign-in', data);
  };
}

export default UsersService;
