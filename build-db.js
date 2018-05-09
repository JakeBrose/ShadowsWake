"use strict";

let models = require("./models");
let { users } = require("./seeders/data/users");
let { characters} = require("./seeders/data/characters");
let { enemies} = require("./seeders/data/enemies");

models.sequelize
  .sync({ force: true })
  .then((queryInterface) => {
    return models.User.bulkCreate(users)
  })
  .then((queryInterface) => {
    return models.Character.bulkCreate(characters)
  })
  .then((queryInterface) => {
    return models.Enemy.bulkCreate(enemies)
  })
  .then(() => {
    process.exit();
  });