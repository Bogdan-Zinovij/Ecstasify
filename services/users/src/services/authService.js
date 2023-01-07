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

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens(userDto);

    await tokenService.saveToken(userDto.id, tokens.refreshToken);
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

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens(userDto);

    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  async signOut(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      console.log(1);
      throw new Error('User is not authorized');
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    console.log('vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv');
    console.log(userData);
    console.log(tokenFromDb);
    console.log('vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv');
    if (!userData || !tokenFromDb) {
      throw new Error('User is not authorized');
    }

    const user = await userService.getUserById(userData.id);
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens(userDto);

    await tokenService.saveToken(user.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }
}

export default new AuthService();
