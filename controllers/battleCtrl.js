
'use strict';


module.exports.battle = (req, res) => {
  // access res.locals and set to variable //
  let characterData = res.locals.character;
  let enemyData = res.locals.enemy;

  // set player character key/values to variables //
  let charId = characterData.id;
  let charVigor = characterData.vigor;
  let charFight = characterData.fight + (Math.floor(Math.random() * 6) + 1);
  let charArmor = characterData.armor + (Math.floor(Math.random() * 6) + 1);

  // set player character key/values to variables //
  let enemyId = enemyData.id;
  console.log("enemy data", enemyData);
  let enemyVigor = enemyData.vigor;
  let enemyFight = enemyData.fight + (Math.floor(Math.random() * 6) + 1);
  let enemyArmor = enemyData.armor + (Math.floor(Math.random() * 6) + 1);

  // handles if character wounds enemy //
  if (charFight > enemyFight && charFight > enemyArmor) {
    const { Enemy, Message } = req.app.get("models");
    Enemy.findById(enemyId)
      .then(enemy => {
        Message.findOne({
          where: {
            name: "enemyWound"
          }
        }).then(message => {
          res.locals.message = message;
          console.log("wound text", res.locals.message)
        });
        return enemy.decrement('vigor', {by:1})
      })
        .then(() => {
          if (enemyVigor === 0 && enemyData.name === "Orc Skirmisher") {
            res.redirect("/battleVictory")
          } else if (enemyVigor === 0 && enemyData.name === "Fell Warg") {
              res.redirect("/battleVictoryTwo")
          } else if (enemyVigor === 0 && enemyData.name === "The Dwimmerlaik") {
              res.redirect("/battleVictoryThree")
          } else {
            res.redirect("back")
          }
        });
  } else if (enemyFight > charFight && enemyFight > charArmor) {
    const { Character, Message } = req.app.get("models");
    Character.findById(charId)
      .then(character => {
        Message.findOne({
          where: {
            name: "charWound"
          }
        }).then(message => {
          res.locals.message = message;
          console.log("wound text", res.locals.message)
        });
        return character.decrement('vigor', {by:1})
      })
      .then(() => {
        if (charVigor === 0) {
          res.redirect("/characterDeath")
        } else {
          res.redirect("back")
        }
      });
  } else {
    res.redirect("back")
  }
};