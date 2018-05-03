"use strict";

let models = require("./models");
let { users } = require("./seeders/data/users");
let { characters} = require("./seeders/data/characters");

models.sequelize
  .sync({ force: true })
  .then((queryInterface) => {
    return models.User.bulkCreate(users)
  })
  .then((queryInterface) => {
    return models.Character.bulkCreate(characters)
  })
  .then(() => {
    process.exit();
  });