"use strict";

module.exports.myProfileView = (req, res, next) => {
  const user = req.app.get("user");
  const { User } = req.app.get("models");
  User.findOne({
    where:{
      id: user.id
    }
  })
    .then((foundUser) => {
      let userData = foundUser.dataValues;
      userData.wins = req.user.wins;
      userData.losses = req.user.losses;
      res.render("profile", { userData });
      return next();
    });
};