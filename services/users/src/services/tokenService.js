import jwt from 'jsonwebtoken';
import { Token } from '../db/models/Token.js';
import * as dotenv from 'dotenv';
dotenv.config();

class TokenService {
  generateTokens(payload) {
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
      Token.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = await Token.create({ userId, refreshToken });

    return token;
  }
}

export default new TokenService();
