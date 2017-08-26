import Sequelize from 'sequelize';

import User from './user.model';
import Project from './project.model';
import Task from './task.model';

const sequelize = new Sequelize(null, null, null, {
  dialect: 'sqlite',
  storage: 'db.sqlite',
  logging: false,
});

User(sequelize);
Project(sequelize);
Task(sequelize);

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
