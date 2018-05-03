"use strict";

module.exports.myCurrentCharacter = (req, res) => {
  const user = req.app.get("user");
  const { Character } = req.app.get("models");
  Character.findOne({
    where:{
      userId: user.id
    }
  })
    .then((foundCharacter) => {
      let characterData = foundCharacter.dataValues;
      res.render("character", { characterData });
    });
};