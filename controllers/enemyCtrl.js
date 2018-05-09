
'use strict';

module.exports.getFirstEnemy = (req, res, next) => {
  const { Enemy } = req.app.get("models");
  Enemy.findOne({
    where:{
      id: 1
    }
  })
    .then((foundEnemy) => {
      res.locals.enemy = foundEnemy.dataValues;
      return next()
    });
};

module.exports.getSecondEnemy = (req, res, next) => {
  const { Enemy } = req.app.get("models");
  Enemy.findOne({
    where:{
      id: 2
    }
  })
    .then((foundEnemy) => {
      res.locals.enemy = foundEnemy.dataValues;
      return next()
    });
};

module.exports.getThirdEnemy = (req, res, next) => {
  const { Enemy } = req.app.get("models");
  Enemy.findOne({
    where:{
      id: 3
    }
  })
    .then((foundEnemy) => {
      res.locals.enemy = foundEnemy.dataValues;
      return next()
    });
};

module.exports.getFinalEnemy = (req, res, next) => {
  const { Enemy } = req.app.get("models");
  Enemy.findOne({
    where:{
      id: 4
    }
  })
    .then((foundEnemy) => {
      res.locals.enemy = foundEnemy.dataValues;
      return next()
    });
};