import authService from '../services/authService.js';
import tokenService from '../services/tokenService.js';

class AuthController {
  async registration(req, res) {
    try {
      const userData = req.body;
      const user = await authService.registration(userData);
      res.status(201).json(user);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: err.message });
    }
  }
}

export default new AuthController();
