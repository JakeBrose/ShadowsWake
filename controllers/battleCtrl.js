
'use strict';


module.exports.battleOne = (req, res) => {
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
    const { Enemy } = req.app.get("models");
    Enemy.findById(enemyId)
      .then(enemy => {
        return enemy.decrement('vigor', {by:1})
      })
        .then(() => {
          if (enemyVigor === 0 && enemyData.name === "Orc Skirmisher") {
            res.redirect("/battleVictory")
          } else {
            let message = "You wounded your enemy!";
            res.redirect("/ChapterOneBattle?hit=" + message)
          }
        });
  } else if (enemyFight > charFight && enemyFight > charArmor) {
    const { Character } = req.app.get("models");
    Character.findById(charId)
      .then(character => {
        return character.decrement('vigor', {by:1})
      })
      .then(() => {
        if (charVigor === 0) {
          res.redirect("/characterDeath")
        } else {
          let message = "You suffered a wound!";
          res.redirect("/ChapterOneBattle?hit=" + message);
        }
      });
  } else {
    let caseNumber = (Math.floor(Math.random() * 4) + 1);
    switch (caseNumber) {
      case 1:
        var message = "You charge the vile creature, but it nimbly evades your attack";
        res.redirect("/ChapterOneBattle?hit=" + message);
        break;
      case 2:
        var message = "The creature's serpent arms lash out at you, but you quickly dodge";
        res.redirect("/ChapterOneBattle?hit=" + message);
        break;
      case 3:
        var message = "You raise your shield just in time to block a flurry of strikes!";
        res.redirect("/ChapterOneBattle?hit=" + message);
        break;
      case 4:
        var message = "You see an opening to strike, but the Garden of Serpents knocks you away before you can ready your blade";
        res.redirect("/ChapterOneBattle?hit=" + message);
        break;
    }
  }
};

module.exports.battleTwo = (req, res) => {
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
    const { Enemy } = req.app.get("models");
    Enemy.findById(enemyId)
      .then(enemy => {
        return enemy.decrement('vigor', {by:1})
      })
      .then(() => {
        if (enemyVigor === 0 && enemyData.name === "Fell Warg") {
          res.redirect("/battleVictoryTwo")
        } else {
          let message = "You wounded your enemy!";
          res.redirect("/ChapterTwoBattle?hit=" + message)
        }
      });
  } else if (enemyFight > charFight && enemyFight > charArmor) {
    const { Character } = req.app.get("models");
    Character.findById(charId)
      .then(character => {
        return character.decrement('vigor', {by:1})
      })
      .then(() => {
        if (charVigor === 0) {
          res.redirect("/characterDeath")
        } else {
          let message = "You suffered a wound!";
          res.redirect("/ChapterTwoBattle?hit=" + message);
        }
      });
  } else {
    let caseNumber = (Math.floor(Math.random() * 4) + 1);
    switch (caseNumber) {
      case 1:
        var message = "You charge the vile creature, but it nimbly evades your attack";
        res.redirect("/ChapterTwoBattle?hit=" + message);
        break;
      case 2:
        var message = "The creature's serpent arms lash out at you, but you quickly dodge";
        res.redirect("/ChapterTwoBattle?hit=" + message);
        break;
      case 3:
        var message = "You raise your shield just in time to block a flurry of strikes!";
        res.redirect("/ChapterTwoBattle?hit=" + message);
        break;
      case 4:
        var message = "You see an opening to strike, but the Garden of Serpents knocks you away before you can ready your blade";
        res.redirect("/ChapterTwoBattle?hit=" + message);
        break;
    }
  }
};

module.exports.battleThree = (req, res) => {
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
    const { Enemy } = req.app.get("models");
    Enemy.findById(enemyId)
      .then(enemy => {
        return enemy.decrement('vigor', {by:1})
      })
      .then(() => {
        if (enemyVigor === 0 && enemyData.name === "The Dwimmerlaik") {
          res.redirect("/battleVictoryThree")
        } else {
          let message = "You wounded your enemy!";
          res.redirect("/ChapterThreeBattle?hit=" + message)
        }
      });
  } else if (enemyFight > charFight && enemyFight > charArmor) {
    const { Character } = req.app.get("models");
    Character.findById(charId)
      .then(character => {
        return character.decrement('vigor', {by:1})
      })
      .then(() => {
        if (charVigor === 0) {
          res.redirect("/characterDeath")
        } else {
          let message = "You suffered a wound!";
          res.redirect("/ChapterThreeBattle?hit=" + message);
        }
      });
  } else {
    let caseNumber = (Math.floor(Math.random() * 4) + 1);
    switch (caseNumber) {
      case 1:
        var message = "You charge the vile creature, but it nimbly evades your attack";
        res.redirect("/ChapterThreeBattle?hit=" + message);
        break;
      case 2:
        var message = "The creature's serpent arms lash out at you, but you quickly dodge";
        res.redirect("/ChapterThreeBattle?hit=" + message);
        break;
      case 3:
        var message = "You raise your shield just in time to block a flurry of strikes!";
        res.redirect("/ChapterThreeBattle?hit=" + message);
        break;
      case 4:
        var message = "You see an opening to strike, but the Garden of Serpents knocks you away before you can ready your blade";
        res.redirect("/ChapterThreeBattle?hit=" + message);
        break;
    }
  }
};