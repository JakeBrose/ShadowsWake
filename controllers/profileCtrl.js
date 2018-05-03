"use strict";

module.exports.myProfileView = (req, res) => {
  const user = req.app.get("user");
  const { User } = req.app.get("models");
  User.findOne({
    where:{
      id: user.id
    }
  })
    .then((foundUser) => {
      let userData = foundUser.dataValues;
      res.render("profile", { userData });
    });
};