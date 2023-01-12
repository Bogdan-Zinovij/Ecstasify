import { validationResult } from 'express-validator';
import { convertErrToHttpForm } from '../errors-handling/convert-err-to-http-form.js';
import userService from '../services/user.service.js';

class UserController {
  async getUsers(req, res) {
    try {
      const users = await userService.getUsers();

      res.status(200).json(users);
    } catch (err) {
      const { responseStatus, message } = convertErrToHttpForm(err);
      res.status(responseStatus).json({ message });
    }
  }

  async getUserById(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { id } = req.params;
      const user = await userService.getUserById(id);

      res.status(200).json(user);
    } catch (err) {
      const { responseStatus, message } = convertErrToHttpForm(err);
      res.status(responseStatus).json({ message });
    }
  }

  async createUser(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const userData = req.body;
      const createdUser = await userService.createUser(userData);

      res.status(201).json(createdUser);
    } catch (err) {
      const { responseStatus, message } = convertErrToHttpForm(err);
      res.status(responseStatus).json({ message });
    }
  }

  async updateUser(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { id } = req.params;
      const userData = req.body;
      const updatedUser = await userService.updateUser(id, userData);

      res.status(200).json(updatedUser);
    } catch (err) {
      const { responseStatus, message } = convertErrToHttpForm(err);
      res.status(responseStatus).json({ message });
    }
  }

  async deleteUser(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { id } = req.params;
      const deletedUser = await userService.deleteUser(id);

      res.status(200).json(deletedUser);
    } catch (err) {
      const { responseStatus, message } = convertErrToHttpForm(err);
      res.status(responseStatus).json({ message });
    }
  }
}

export default new UserController();
