'use strict';
module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.TEXT,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    wins: DataTypes.INTEGER,
    losses: DataTypes.INTEGER,
    last_login: DataTypes.INTEGER,
  }, {timestamps: true, tableName: 'users'});

  User.associate= (models) => {
    User.hasMany(models.Character, {
      foreignKey: "userId"
    })
  };

  return User;
};