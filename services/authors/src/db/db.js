import { Sequelize } from 'sequelize';

export default new Sequelize('authors', 'authors', 'authors', {
  host: 'postgres-authors',
  dialect: 'postgres',
});
