"use strict";

let models = require("./models");
let { users } = require("./seeders/data/users");

models.sequelize
  .sync({ force: true })
  .then((queryInterface) => {
    return models.User.bulkCreate(users)
  })
  .then(() => {
    process.exit();
  });