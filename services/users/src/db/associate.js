import { Token } from './models/Token.js';
import { User } from './models/User.js';

export const associate = () => {
  User.hasOne(Token);
  Token.belongsTo(User, {
    foreignKey: 'userId',
  });
};
