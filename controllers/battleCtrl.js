
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
            let message = "Your blade pierces the creatures flesh! The Garden of Serpents suffers 1 wound.";
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
          let message = "You writhe as the creature wraps its serpent arms around your torso before throwing you against a wall..You suffer 1 wound.";
          res.redirect("/ChapterOneBattle?hit=" + message);
        }
      });
  } else {
    let caseNumber = (Math.floor(Math.random() * 4) + 1);
    switch (caseNumber) {
      case 1:
        var message = "Alas, the vile wretch evaded your strike..";
        res.redirect("/ChapterOneBattle?hit=" + message);
        break;
      case 2:
        var message = "You raise your shield, deflecting the creatures hail of blows!";
        res.redirect("/ChapterOneBattle?hit=" + message);
        break;
      case 3:
        var message = "You jump back as the creature advances, barely escaping a mortal blow!";
        res.redirect("/ChapterOneBattle?hit=" + message);
        break;
      case 4:
        var message = "Both you and your adversary ready yourselves for the next attack.";
        res.redirect("/ChapterOneBattle?hit=" + message);
        break;
    }
  }
};

////////////////////////////////////////////////////////////
//  THE SECOND BATTLE /////////////////////////////////////
//////////////////////////////////////////////////////////

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
          let message = "Your strike was true! The Pursuer suffers 1 wound.";
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
          let message = "You feel The Pursuer's blade cut into your flesh..You suffer 1 wound.";
          res.redirect("/ChapterTwoBattle?hit=" + message);
        }
      });
  } else {
    let caseNumber = (Math.floor(Math.random() * 4) + 1);
    switch (caseNumber) {
      case 1:
        var message = "The sound of steel clashing rings out as you exchange blows!";
        res.redirect("/ChapterTwoBattle?hit=" + message);
        break;
      case 2:
        var message = "The Pursuer raises his giant blade high and you ready yourself for the assault.";
        res.redirect("/ChapterTwoBattle?hit=" + message);
        break;
      case 3:
        var message = "The Pursuer charges you, but your perfectly timed parry staggers the wretched fool!";
        res.redirect("/ChapterTwoBattle?hit=" + message);
        break;
      case 4:
        var message = "Your blades clash together, neither of you willing relinquish the bind!";
        res.redirect("/ChapterTwoBattle?hit=" + message);
        break;
    }
  }
};

////////////////////////////////////////////////////////////
//  THE THIRD BATTLE  /////////////////////////////////////
//////////////////////////////////////////////////////////

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
          let message = "You bring your sword down upon your foe! The Gravelord's Shade suffers 1 wound.";
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
          let message = "The Gravelord's Scythe rips into your flesh! You suffer 1 wound.";
          res.redirect("/ChapterThreeBattle?hit=" + message);
        }
      });
  } else {
    let caseNumber = (Math.floor(Math.random() * 4) + 1);
    switch (caseNumber) {
      case 1:
        var message = "The Gravelord swings its' mighty scythe, but you dodge just in time.";
        res.redirect("/ChapterThreeBattle?hit=" + message);
        break;
      case 2:
        var message = "The sound of steel and bone clashing rings out as you exchange blows!";
        res.redirect("/ChapterThreeBattle?hit=" + message);
        break;
      case 3:
        var message = "You raise your shield just in time to block a flurry of strikes!";
        res.redirect("/ChapterThreeBattle?hit=" + message);
        break;
      case 4:
        var message = "You see an opening to strike, but the Gravelord's Shade knocks you away before you can ready your blade";
        res.redirect("/ChapterThreeBattle?hit=" + message);
        break;
    }
  }
};