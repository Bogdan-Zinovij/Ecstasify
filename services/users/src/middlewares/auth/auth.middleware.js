import { errorMessages } from '../../config.js';
import tokenService from '../../services/token.service.js';

export default (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      return res.status(401).json({ message: errorMessages.UNAUTHORIZED });
    }

    const accessToken = authorizationHeader.split(' ')[1];
    if (!accessToken) {
      return res.status(401).json({ message: errorMessages.UNAUTHORIZED });
    }

    const userData = tokenService.validateAccessToken(accessToken);
    if (!userData) {
      return res.status(401).json({ message: errorMessages.UNAUTHORIZED });
    }

    req.user = userData;
    next();
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
