import jwt from 'jsonwebtoken';
import { Token } from '../db/models/Token.js';
import * as dotenv from 'dotenv';
dotenv.config();

class TokenService {
  generateTokens(userData) {
    const payload = { id: userData.id, email: userData.email };
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: '3m',
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: '7d',
    });

    return { accessToken, refreshToken };
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await Token.findOne({
      where: { userId },
    });
    if (tokenData) {
      Token.update({ refreshToken }, { where: { userId } });
      console.log('saved ', tokenData);
      return tokenData.save();
    }
    const token = await Token.create({ userId, refreshToken });

    return token;
  }

  async removeToken(refreshToken) {
    const tokenData = await Token.destroy({ where: { refreshToken } });
    return tokenData;
  }

  async findToken(refreshToken) {
    const tokenData = await Token.findOne({ where: { refreshToken } });
    return tokenData;
  }

  validateAccessToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
      return userData;
    } catch (err) {
      return null;
    }
  }

  validateRefreshToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
      return userData;
    } catch (err) {
      return null;
    }
  }
}

export default new TokenService();
