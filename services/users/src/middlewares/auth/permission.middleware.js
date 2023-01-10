import { errorMessages, roles } from '../../config.js';

export default function (req, res, next) {
  try {
    const user = req.user;
    if (user.role !== roles.ADMIN) {
      return res.status(403).json({ message: errorMessages.PERMISSION_DENIED });
    }

    next();
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}
