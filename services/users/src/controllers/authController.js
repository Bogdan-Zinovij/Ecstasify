import authService from '../services/authService.js';
import * as dotenv from 'dotenv';
dotenv.config();

class AuthController {
  async signUp(req, res) {
    try {
      const userData = req.body;
      const authData = await authService.signUp(userData);

      res.cookie('refreshToken', authData.refreshToken, {
        maxAge: process.env.JWT_REFRESH_EXPIRES_MILISECONDS,
        httpOnly: true,
      });
      res.status(201).json(authData);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: err.message });
    }
  }

  async signIn(req, res) {
    try {
      const userData = req.body;
      const authData = await authService.signIn(userData);

      res.cookie('refreshToken', authData.refreshToken, {
        maxAge: process.env.JWT_REFRESH_EXPIRES_MILISECONDS,
        httpOnly: true,
      });
      res.status(200).json(authData);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async refresh(req, res) {
    try {
      const { refreshToken } = req.cookies;
      const authData = await authService.refresh(refreshToken);

      res.cookie('refreshToken', authData.refreshToken, {
        maxAge: process.env.JWT_REFRESH_EXPIRES_MILISECONDS,
        httpOnly: true,
      });
      res.status(200).json(authData);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async signOut(req, res) {
    try {
      const { refreshToken } = req.cookies;
      await authService.signOut(refreshToken);

      res.clearCookie('refreshToken');
      res.status(200).json(refreshToken);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}

export default new AuthController();
