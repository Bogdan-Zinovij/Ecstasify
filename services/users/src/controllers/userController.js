'use strict';

const userServices = require('../services/userServices');

class UserController {
  async getUsers(req, res) {
    try {
      const users = await userServices.getUsers();
      res.status(200).json(users);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await userServices.getUserById(id);
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
      res.status(404).json({ message: err.message });
    }
  }

  async createUser(req, res) {
    try {
      const userData = req.body;
      const createdUser = await userServices.createUser(userData);
      res.status(201).json(createdUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const userData = req.body;
      const updatedUser = await userServices.updateUser(id, userData);
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const deletedUser = await userServices.deleteUser(id);
      res.status(200).json(deletedUser);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
}

module.exports = new UserController();
