import Sequelize from 'sequelize';

export default function (sequelize) {
  const Project = sequelize.define('Project', {
    name: Sequelize.STRING,
  }, {
    createdAt: false,
    updatedAt: false,
  });

  Project.associate = (models) => {
    Project.hasMany(models.Task);
  }
};
