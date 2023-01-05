import bcrypt from 'bcryptjs';
import { v4 as uuid } from 'uuid';
import { Users } from '../db/models/Users.js';
import { SALT } from '../config.js';

class UserServices {
  async getUsers() {
    return await Users.scope('withoutPassword').findAll({ order: ['id'] });
  }

  async getUserById(id) {
    const user = await Users.scope('withoutPassword').findOne({
      where: { id },
    });

    if (!user) throw new Error('User with the specified ID does not exist');

    return user;
  }

  async createUser(userData) {
    const userID = uuid();
    const hashPassword = await bcrypt.hash(userData.password, SALT);
    userData.password = hashPassword;
    userData.id = userID;
    await Users.create(userData);
    return await Users.scope('withoutPassword').findOne({
      where: { id: userID },
    });
  }

  async updateUser(id, userData) {
    const user = await Users.findOne({ where: { id } });
    if (!user) throw new Error('User with the specified ID does not exist');

    await Users.update(userData, { where: { id } });

    return await Users.scope('withoutPassword').findOne({ where: { id } });
  }

  async deleteUser(id) {
    const user = await Users.scope('withoutPassword').findOne({
      where: { id },
    });

    if (!user) throw new Error('User with the specified ID does not exist');

    const deleteResult = await Users.destroy({ where: { id } });
    if (!deleteResult)
      throw new Error('Failed to delete a user with specified ID');

    return user;
  }
}

export default new UserServices();
