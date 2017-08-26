import Sequelize from 'sequelize';

export default function (sequelize) {
  const Task = sequelize.define('Task', {
    description: Sequelize.STRING
  });
};
