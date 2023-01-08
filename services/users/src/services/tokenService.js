import jwt from 'jsonwebtoken';
import { Token } from '../db/models/Token.js';
import * as dotenv from 'dotenv';
dotenv.config();

class TokenService {
  generateTokens(userData) {
    const payload = {
      id: userData.id,
      email: userData.email,
      role: userData.role,
    };
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: process.env.JWT_ACCESS_EXPIRES,
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: process.env.JWT_REFRESH_EXPIRES,
    });

    return { accessToken, refreshToken };
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await Token.findOne({ where: { userId } });
    if (tokenData) {
      return await Token.update({ refreshToken }, { where: { userId } });
    }

    return await Token.create({ userId, refreshToken });
  }

  async findToken(refreshToken) {
    return await Token.findOne({ where: { refreshToken } });
  }

  async removeToken(refreshToken) {
    return await Token.destroy({ where: { refreshToken } });
  }

  validateAccessToken(token) {
    try {
      return jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    } catch (err) {
      return null;
    }
  }

  validateRefreshToken(token) {
    try {
      return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    } catch (err) {
      return null;
    }
  }
}

export default new TokenService();
