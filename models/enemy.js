'use strict';
module.exports = function(sequelize, DataTypes) {
  let Enemy = sequelize.define('Enemy', {
    name: DataTypes.STRING,
    vigor: DataTypes.INTEGER,
    fight: DataTypes.INTEGER,
    armor: DataTypes.INTEGER,
  }, {timestamps: false, tableName: 'enemies'});
  return Enemy;
};