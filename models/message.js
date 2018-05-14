'use strict';
module.exports = function(sequelize, DataTypes) {
  let Message = sequelize.define('Message', {
    name: DataTypes.STRING,
    text: DataTypes.STRING,
  }, {timestamps: true, tableName: 'messages'});
  return Message;
};
