import bcrypt from 'bcryptjs';
import tokenService from './tokenService.js';
import userService from './userService.js';
import UserDto from '../dtos/user-dto.js';

class AuthService {
  async signUp(userData) {
    const candidate = await userService.getUserByEmail(userData.email);
    if (candidate) {
      throw new Error('User with this email has already exists!');
    }
    const user = await userService.createUser(userData);

    const tokens = tokenService.generateTokens(userData);
    await tokenService.saveToken(user.id, tokens.refreshToken);
    const userDto = new UserDto(user);
    return { ...tokens, user: userDto };
  }

  async signIn(userData) {
    const user = await userService.getUserByEmail(userData.email);
    if (!user) {
      throw new Error('User with this email does not exists!');
    }

    const isPassEqual = await bcrypt.compare(userData.password, user.password);
    if (!isPassEqual) {
      throw new Error('Wrong password!');
    }

    const tokens = tokenService.generateTokens(userData);
    await tokenService.saveToken(user.id, tokens.refreshToken);
    const userDto = new UserDto(user);
    return { ...tokens, user: userDto };
  }
}

export default new AuthService();
