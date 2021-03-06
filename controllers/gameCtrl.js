'use strict';


module.exports.newGame = (req, res) => {
  res.render("newGame");
};

module.exports.chapterOne = (req, res) => {
  let characterData = res.locals.character;
  res.render("ChapterOne", { characterData });
};

module.exports.chapterOneA = (req, res) => {
  let characterData = res.locals.character;
  res.render("ChapterOneA", { characterData });
};

module.exports.chapterOneBattle = (req, res) => {
  let characterData = res.locals.character;
  let enemyData = res.locals.enemy;
  let message = req.query.hit;
  res.render("ChapterOneBattle", { characterData, enemyData, message });
};

module.exports.battleVictory = (req, res) => {
  let characterData = res.locals.character;
  res.render("battleVictory", { characterData });
};

// Chapter Two //

module.exports.chapterTwo = (req, res) => {
  let characterData = res.locals.character;
  res.render("ChapterTwo", { characterData });
};

module.exports.chapterTwoA = (req, res) => {
  let characterData = res.locals.character;
  res.render("ChapterTwoA", { characterData });
};

module.exports.chapterTwoBattle = (req, res) => {
  let characterData = res.locals.character;
  let enemyData = res.locals.enemy;
  let message = req.query.hit;
  res.render("ChapterTwoBattle", { characterData, enemyData, message });
};

module.exports.battleVictoryTwo = (req, res) => {
  let characterData = res.locals.character;
  res.render("battleVictoryTwo", { characterData });
};


// Chapter Three

module.exports.chapterThree = (req, res) => {
  let characterData = res.locals.character;
  res.render("ChapterThree", { characterData });
};

module.exports.chapterThreeA = (req, res) => {
  let characterData = res.locals.character;
  res.render("ChapterThreeA", { characterData });
};

module.exports.chapterThreeBattle = (req, res) => {
  let characterData = res.locals.character;
  let enemyData = res.locals.enemy;
  let message = req.query.hit;
  res.render("ChapterThreeBattle", { characterData, enemyData, message });
};

module.exports.battleVictoryThree = (req, res) => {
  let characterData = res.locals.character;
  res.render("battleVictoryThree", { characterData });
};

// Loss
module.exports.death = (req, res) => {
  let characterData = res.locals.character;
  res.render("characterDeath", { characterData });
};