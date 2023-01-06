import bcrypt from 'bcryptjs';
import tokenService from './tokenService.js';
import userService from './userService.js';
import { SALT } from '../config.js';

class AuthService {
  async registration(userData) {
    const candidate = await userService.getUserByEmail(userData.email);
    if (candidate) {
      throw new Error('User with this email has already exists!');
    }
    const user = await userService.createUser(userData);
    return user;
  }
}

export default new AuthService();
