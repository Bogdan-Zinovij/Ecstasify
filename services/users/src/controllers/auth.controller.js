import { validationResult } from 'express-validator';
import authService from '../services/auth.service.js';
import tokenService from '../services/token.service.js';
import * as dotenv from 'dotenv';
import { errorMessages } from '../config.js';
import { convertErrToHttpForm } from '../errors-handling/convert-err-to-http-form.js';
dotenv.config();

class AuthController {
  async signUp(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const userData = req.body;
      const authData = await authService.signUp(userData);

      res.cookie('refreshToken', authData.refreshToken, {
        maxAge: process.env.JWT_REFRESH_EXPIRES_MILISECONDS,
        httpOnly: true,
      });
      res.status(201).json(authData);
    } catch (err) {
      console.log(err);
      const { responseStatus, message } = convertErrToHttpForm(err);
      res.status(responseStatus).json({ message });
    }
  }

  async signIn(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const userData = req.body;
      const authData = await authService.signIn(userData);

      res.cookie('refreshToken', authData.refreshToken, {
        maxAge: process.env.JWT_REFRESH_EXPIRES_MILISECONDS,
        httpOnly: true,
      });
      res.status(200).json(authData);
    } catch (err) {
      const { responseStatus, message } = convertErrToHttpForm(err);
      res.status(responseStatus).json({ message });
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
      const { responseStatus, message } = convertErrToHttpForm(err);
      res.status(responseStatus).json({ message });
    }
  }

  async signOut(req, res) {
    try {
      const { refreshToken } = req.cookies;
      await authService.signOut(refreshToken);

      res.clearCookie('refreshToken');
      res.status(200).json(refreshToken);
    } catch (err) {
      const { responseStatus, message } = convertErrToHttpForm(err);
      res.status(responseStatus).json({ message });
    }
  }

  async verifyToken(req, res) {
    try {
      const { token } = req.params;
      const payload = tokenService.validateAccessToken(token);
      if (!payload) {
        res.status(401).json({ message: errorMessages.ACCESS_TOKEN_EXPIRED });
      }

      res.status(200).json({ payload });
    } catch (err) {
      const { responseStatus, message } = convertErrToHttpForm(err);
      res.status(responseStatus).json({ message });
    }
  }
}

export default new AuthController();
