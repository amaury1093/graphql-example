import Sequelize from 'sequelize';

export default function (sequelize) {
  const Project = sequelize.define('Project', {
    name: Sequelize.STRING
  }, {
    createdAt: false,
    updatedAt: false
  });

  Project.associate = (models) => {
    Project.belongsTo(models.User);
    Project.hasMany(models.Task);
  };
}
