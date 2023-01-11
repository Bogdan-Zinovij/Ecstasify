import bcrypt from 'bcryptjs';
import tokenService from './token.service.js';
import userService from './user.service.js';
import UserDto from '../dtos/user.dto.js';
import { kafkaTopics, errorMessages } from '../config.js';
import KafkaNotifProducer from './kafka-notification-producer.service.js';

class AuthService {
  constructor(notificationProducer) {
    this.notificationProducer = notificationProducer;
    this.setup();
  }

  async setup() {
    try {
      await this.notificationProducer.connect();
    } catch (err) {
      console.error(errorMessages.KAFKA_FAILED_CONNECT + err);
    }
  }

  async signUp(userData) {
    const newUser = await userService.createUser(userData);

    const userDto = new UserDto(newUser);
    const tokens = tokenService.generateTokens(userDto);
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    await this.notificationProducer.send({
      topic: kafkaTopics.SUCCESSFUL_REGISTRATION,
      messages: [{ value: JSON.stringify(userDto) }],
    });

    return { ...tokens, user: userDto };
  }

  async signIn(userData) {
    const user = await userService.getUserByEmail(userData.email);
    if (!user) throw new Error(errorMessages.USER_NOT_EXISTS_EMAIL);

    const isPassEqual = await bcrypt.compare(userData.password, user.password);
    if (!isPassEqual) throw new Error(errorMessages.WRONG_PASSWORD);

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens(userDto);
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async refresh(refreshToken) {
    if (!refreshToken) throw new Error(errorMessages.UNAUTHORIZED);

    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) throw new Error(errorMessages.UNAUTHORIZED);

    const user = await userService.getUserById(userData.id);
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens(userDto);
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async signOut(refreshToken) {
    if (!refreshToken) throw new Error(errorMessages.UNAUTHORIZED);

    return tokenService.removeToken(refreshToken);
  }
}

export default new AuthService(new KafkaNotifProducer());