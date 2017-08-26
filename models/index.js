import Sequelize from 'sequelize';

import User from './user.model';
import Project from './project.model';
import Task from './task.model';
import seed from './seed'; // eslint-disable-line

const sequelize = new Sequelize(null, null, null, {
  dialect: 'sqlite',
  storage: 'db.sqlite',
  logging: false
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
// Uncomment the line if you want to rerun DB seed
// sequelize.sync({ force: true }).then(() => seed(sequelize));

export default sequelize;
