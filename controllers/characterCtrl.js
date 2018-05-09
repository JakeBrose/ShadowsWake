"use strict";

module.exports.myCurrentCharacter = (req, res, next) => {
  const user = req.app.get("user");
  const { Character } = req.app.get("models");
  Character.findOne({
    where:{
      userId: user.id
    },
    order: [
      [
        'updatedAt', 'DESC'
      ]
    ]
  })
    .then((foundCharacter) => {
      res.locals.character = foundCharacter.dataValues;
      return next()
    });
};

module.exports.addNewCharacter = (req, res) => {
  let { Character } = req.app.get('models');
  let user = req.app.get("user");
  let {...newCharacter} = req.body;
  if (user) {
    newCharacter.vigor = +newCharacter.vigor;
    newCharacter.fight = +newCharacter.fight;
    newCharacter.armor = +newCharacter.armor;
    newCharacter.userId = user.id;
    Character.create(newCharacter)
      .then(character => {
        const { id } = character.get({plain:true});
        res.render("newGame")
      })
      .catch(err => {
        console.log("ERROR: ", err);
      });
  } else {
    res.render('login');
  }
};