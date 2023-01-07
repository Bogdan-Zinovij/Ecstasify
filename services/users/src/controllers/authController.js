import authService from '../services/authService.js';
import tokenService from '../services/tokenService.js';

class AuthController {
  async registration(req, res) {
    try {
      const userData = req.body;
      const user = await authService.registration(userData);
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
}

export default new AuthController();
