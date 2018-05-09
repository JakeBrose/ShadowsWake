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
  res.render("ChapterOneBattle", { characterData, enemyData });
};