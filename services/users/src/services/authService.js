import bcrypt from 'bcryptjs';
import tokenService from './tokenService.js';
import userService from './userService.js';
import { SALT } from '../config.js';
import jwt from 'jsonwebtoken';

class AuthService {
  async registration(userData) {
    const candidate = await userService.getUserByEmail(userData.email);
    if (candidate) {
      throw new Error('User with this email has already exists!');
    }
    const user = await userService.createUser(userData);

    const tokens = tokenService.generateTokens(userData);
    await tokenService.saveToken(user.id, tokens.refreshToken);
    return { ...tokens, user };
  }

  async logIn() {}
}

export default new AuthService();
