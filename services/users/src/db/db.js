import { Sequelize } from 'sequelize';

export default new Sequelize('demo', 'demo', 'demo', {
  host: 'postgres-users',
  dialect: 'postgres',
});
