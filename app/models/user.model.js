import Sequelize from 'sequelize';

export default function (sequelize) {
  const User = sequelize.define('User', {
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING,
  });

  User.associate = (models) => {
    // User.hasMany(models.Projects);
  }
};
