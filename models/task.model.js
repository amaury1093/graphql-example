import Sequelize from 'sequelize';

export default function (sequelize) {
  const Task = sequelize.define('Task', {
    description: Sequelize.STRING
  }, {
    createdAt: false,
    updatedAt: false
  });

  Task.associate = (models) => {
    Task.belongsTo(models.Project);
  };
}
