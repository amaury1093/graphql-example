import Sequelize from 'sequelize';

export default function (sequelize) {
  const Project = sequelize.define('Project', {
    name: Sequelize.STRING,
  });

  Project.associate = (models) => {
    Project.hasMany(models.Task);
  }
};
