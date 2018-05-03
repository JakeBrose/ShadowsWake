'use strict';
module.exports = function(sequelize, DataTypes) {
  let Character = sequelize.define('Character', {
    name: DataTypes.STRING,
    vigor: DataTypes.INTEGER,
    fight: DataTypes.INTEGER,
    armor: DataTypes.INTEGER,
    win: DataTypes.INTEGER
  }, {timestamps: true, tableName: 'characters'});

  Character.associate= (models) => {
    Character.belongsTo(models.User, {
      foreignKey: "userId"
    })
  };

  return Character;
};