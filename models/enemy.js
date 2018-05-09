'use strict';
module.exports = function(sequelize, DataTypes) {
  let Enemy = sequelize.define('Enemy', {
    name: DataTypes.STRING,
    vigor: DataTypes.INTEGER,
    fight: DataTypes.INTEGER,
    armor: DataTypes.INTEGER,
  }, {timestamps: true, tableName: 'enemies'});

  Enemy.associate= (models) => {
    Enemy.belongsTo(models.User, {
      foreignKey: "userId"
    })
  };
  return Enemy;
};
