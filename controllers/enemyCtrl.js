
'use strict';


///////////////////////////////////////////////////////////
//      Gets individual enemies                         //
/////////////////////////////////////////////////////////
module.exports.getFirstEnemy = (req, res, next) => {
  const { Enemy } = req.app.get("models");
  let user = req.app.get("user");
  Enemy.findOne({
    where:{
      name: "Orc Skirmisher",
      userId: user.id
    },
    order: [
      [
        'updatedAt', 'DESC'
      ]
    ]
  })
    .then((foundEnemy) => {
      res.locals.enemy = foundEnemy.dataValues;
      return next()
    });
};


///////////////////////////////////////////////////////////
//      POST NEW ENEMIES                                //
/////////////////////////////////////////////////////////
module.exports.createOrcSkirmisher = (req, res) => {
  let { Enemy } = req.app.get('models');
  let user = req.app.get("user");
  let {...newEnemy} = req.body;
  if (user) {
    newEnemy.name = "Orc Skirmisher";
    newEnemy.vigor = +newEnemy.vigor;
    newEnemy.fight = +newEnemy.fight;
    newEnemy.armor = +newEnemy.armor;
    newEnemy.userId = user.id;
    Enemy.create(newEnemy)
      .then(enemy => {
        const { id } = enemy.get({plain:true});
        res.redirect("/chapterOne")
      })
      .catch(err => {
        console.log("ERROR: ", err);
      });
  } else {
    res.render('login');
  }
};

module.exports.createFellWarg = (req, res) => {
  let { Enemy } = req.app.get('models');
  let user = req.app.get("user");
  let {...newEnemy} = req.body;
  if (user) {
    newEnemy.name = "Fell Warg";
    newEnemy.vigor = +newEnemy.vigor;
    newEnemy.fight = +newEnemy.fight;
    newEnemy.armor = +newEnemy.armor;
    newEnemy.userId = user.id;
    Enemy.create(newEnemy)
      .then(enemy => {
        const { id } = enemy.get({plain:true});
        res.redirect("/chapterOne")
      })
      .catch(err => {
        console.log("ERROR: ", err);
      });
  } else {
    res.render('login');
  }
};

module.exports.createOrcCaptain = (req, res) => {
  let { Enemy } = req.app.get('models');
  let user = req.app.get("user");
  let {...newEnemy} = req.body;
  if (user) {
    newEnemy.name = "Orc Captain";
    newEnemy.vigor = +newEnemy.vigor;
    newEnemy.fight = +newEnemy.fight;
    newEnemy.armor = +newEnemy.armor;
    newEnemy.userId = user.id;
    Enemy.create(newEnemy)
      .then(enemy => {
        const { id } = enemy.get({plain:true});
        res.redirect("/chapterOne")
      })
      .catch(err => {
        console.log("ERROR: ", err);
      });
  } else {
    res.render('login');
  }
};

module.exports.createTheDwimmerlaik = (req, res) => {
  let { Enemy } = req.app.get('models');
  let user = req.app.get("user");
  let {...newEnemy} = req.body;
  if (user) {
    newEnemy.name = "The Dwimmerlaik";
    newEnemy.vigor = +newEnemy.vigor;
    newEnemy.fight = +newEnemy.fight;
    newEnemy.armor = +newEnemy.armor;
    newEnemy.userId = user.id;
    Enemy.create(newEnemy)
      .then(enemy => {
        const { id } = enemy.get({plain:true});
        res.redirect("/chapterOne")
      })
      .catch(err => {
        console.log("ERROR: ", err);
      });
  } else {
    res.render('login');
  }
};

///////////////////////////////////////////////////////////
//      Update Enemy Key/Values                         //
/////////////////////////////////////////////////////////