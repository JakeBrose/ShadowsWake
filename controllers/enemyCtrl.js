
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

module.exports.getSecondEnemy = (req, res, next) => {
  const { Enemy } = req.app.get("models");
  let user = req.app.get("user");
  Enemy.findOne({
    where:{
      name: "Fell Warg",
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

module.exports.getThirdEnemy = (req, res, next) => {
  const { Enemy } = req.app.get("models");
  let user = req.app.get("user");
  Enemy.findOne({
    where:{
      name: "The Dwimmerlaik",
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
module.exports.createFirstEnemy = (req, res) => {
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

module.exports.createSecondEnemy = (req, res) => {
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
        res.redirect("/chapterTwo")
      })
      .catch(err => {
        console.log("ERROR: ", err);
      });
  } else {
    res.render('login');
  }
};

module.exports.createThirdEnemy = (req, res) => {
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
        res.redirect("/chapterThree")
      })
      .catch(err => {
        console.log("ERROR: ", err);
      });
  } else {
    res.render('login');
  }
};


