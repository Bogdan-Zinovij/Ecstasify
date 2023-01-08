import bcrypt from 'bcryptjs';
import { v4 as uuid } from 'uuid';
import { User } from '../db/models/User.js';
import { SALT } from '../config.js';

class UserService {
  async getUsers() {
    return await User.scope('withoutPassword').findAll({ order: ['id'] });
  }

  async getUserById(id) {
    const user = await User.findOne({ where: { id } });

    if (!user) throw new Error('User with the specified ID does not exist');

    return user;
  }

  async getUserByEmail(email) {
    return await User.findOne({ where: { email } });
  }

  async createUser(userData) {
    userData.id = uuid();
    userData.password = await bcrypt.hash(userData.password, SALT);

    await User.create(userData);

    return await User.findOne({ where: { id: userData.id } });
  }

  async updateUser(id, userData) {
    const user = await User.findOne({ where: { id } });
    if (!user) throw new Error('User with the specified ID does not exist');

    await User.update(userData, { where: { id } });

    return await User.findOne({ where: { id } });
  }

  async deleteUser(id) {
    const user = await User.findOne({ where: { id } });
    if (!user) throw new Error('User with the specified ID does not exist');

    const deleteResult = await User.destroy({ where: { id } });
    if (!deleteResult)
      throw new Error('Failed to delete a user with specified ID');

    return user;
  }
}

export default new UserService();
