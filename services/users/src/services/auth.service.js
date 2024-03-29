import bcrypt from 'bcryptjs';
import tokenService from './token.service.js';
import userService from './user.service.js';
import UserDto from '../dtos/user.dto.js';
import { kafkaTopics, errorMessages } from '../config.js';
import KafkaNotifProducer from './kafka-notification-producer.service.js';
import UserNotificationDto from '../dtos/user-notification.dto.js';
import { HttpException } from '../errors-handling/custom-errors.js';

class AuthService {
  constructor(notificationProducer) {
    this.notificationProducer = notificationProducer;
    this.notificationProducer.connect();
  }

  async signUp(userData) {
    const newUser = await userService.createUser(userData);

    const userDto = new UserDto(newUser);
    const tokens = tokenService.generateTokens(userDto);
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    const userNotificationDto = new UserNotificationDto(newUser);
    await this.notificationProducer.send(
      kafkaTopics.NEW_USER_REGISTERED,
      userNotificationDto,
    );

    return { ...tokens, user: userDto };
  }

  async signIn(userData) {
    const user = await userService.getUserByEmail(userData.email);
    if (!user)
      throw new HttpException(400, errorMessages.USER_NOT_EXISTS_EMAIL);

    const isPassEqual = await bcrypt.compare(userData.password, user.password);
    if (!isPassEqual)
      throw new HttpException(400, errorMessages.WRONG_PASSWORD);

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens(userDto);
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async refresh(refreshToken) {
    if (!refreshToken) throw new HttpException(401, errorMessages.UNAUTHORIZED);

    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb)
      throw new HttpException(401, errorMessages.UNAUTHORIZED);

    const user = await userService.getUserById(userData.id);
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens(userDto);
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async signOut(refreshToken) {
    if (!refreshToken) throw new HttpException(401, errorMessages.UNAUTHORIZED);

    return tokenService.removeToken(refreshToken);
  }
}

export default new AuthService(new KafkaNotifProducer());
