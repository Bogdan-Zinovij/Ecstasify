import authService from '../services/authService.js';

class AuthController {
  async signUp(req, res) {
    try {
      const userData = req.body;
      const user = await authService.signUp(userData);
      res.cookie('refreshToken', user.refreshToken, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      res.status(201).json(user);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: err.message });
    }
  }

  async signIn(req, res) {
    try {
      const userData = req.body;
      const user = await authService.signIn(userData);
      res.cookie('refreshToken', user.refreshToken, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      res.status(200).json(user);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async signOut(req, res) {
    try {
      const { refreshToken } = req.cookies;
      const token = await authService.signOut(refreshToken);
      res.clearCookie('refreshToken');
      res.status(200).json(token);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async refresh(req, res) {
    try {
      const { refreshToken } = req.cookies;
      const user = await authService.refresh(refreshToken);
      res.cookie('refreshToken', user.refreshToken, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      res.status(200).json(user);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}

export default new AuthController();
