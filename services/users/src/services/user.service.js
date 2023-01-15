import bcrypt from 'bcryptjs';
import { v4 as uuid } from 'uuid';
import { User } from '../db/models/user.model.js';
import { errorMessages, roles, SALT } from '../config.js';
import { HttpException } from '../errors-handling/custom-errors.js';

class UserService {
  async getUsers() {
    return User.scope('withoutPassword').findAll({ order: ['id'] });
  }

  async getUserById(id) {
    const user = await User.findOne({ where: { id } });

    if (!user) throw new HttpException(400, errorMessages.USER_NOT_EXISTS_ID);

    return user;
  }

  async getUserByEmail(email) {
    return await User.findOne({ where: { email } });
  }

  async createUser(userData) {
    const user = await this.getUserByEmail(userData.email);
    if (user) throw new HttpException(400, errorMessages.USER_ALREADY_EXISTS);

    const newUser = { ...userData };
    newUser.id = uuid();
    newUser.password = await bcrypt.hash(userData.password, SALT);
    newUser.role = roles.USER;

    await User.create(newUser);

    return User.findOne({ where: { id: newUser.id } });
  }

  async updateUser(id, userData) {
    const user = await User.findOne({ where: { id } });
    if (!user) throw new HttpException(400, errorMessages.USER_NOT_EXISTS_ID);

    await User.update(userData, { where: { id } });

    return User.findOne({ where: { id } });
  }

  async deleteUser(id) {
    const user = await User.findOne({ where: { id } });
    if (!user) throw new HttpException(400, errorMessages.USER_NOT_EXISTS_ID);

    await User.destroy({ where: { id } });

    return user;
  }
}

export default new UserService();
