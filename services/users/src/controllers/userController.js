'use strict';

const getAllUsersService = require('../services/getAllUsersService');

class UserController {
  async getAll(req, res) {
    try {
      const users = await getAllUsersService();
      res.status(200).json(users);
    } catch (err) {
      res.status(400).send();
    }
  }
}

module.exports = new UserController();
