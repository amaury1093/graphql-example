import Sequelize from 'sequelize';

import User from './user.model';

const sequelize = new Sequelize(null, null, null, {
  dialect: 'sqlite',
  storage: 'db.sqlite',
  logging: false,
});

User(sequelize);

// Set up data relationships
const models = sequelize.models;
Object.keys(models).forEach(name => {
  if ('associate' in models[name]) {
    models[name].associate(models);
  }
});

sequelize.sync();
// sequelize.sync({ force: true }); // Update columns, delete all records

export default sequelize;
