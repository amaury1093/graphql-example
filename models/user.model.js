import Sequelize from 'sequelize';

export default function (sequelize) {
  const User = sequelize.define('User', {
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING,
    email: Sequelize.STRING
  }, {
    createdAt: false,
    updatedAt: false
  });

  User.associate = (models) => {
    User.hasMany(models.Project);
  };
}
