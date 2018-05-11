'use strict';

const { Router } = require("express");
const router = Router();
const {
  newGame,
  chapterOne,
  chapterOneA,
  chapterOneBattle,
  battleVictory,
  chapterTwo,
  chapterTwoA,
  chapterTwoBattle,
  battleVictoryTwo,
  chapterThree,
  chapterThreeA,
  chapterThreeBattle,
  battleVictoryThree,
  death
} = require("../controllers/gameCtrl");

const {
  myCurrentCharacter,
  addNewCharacter,
  youWin
} = require("../controllers/characterCtrl");

const {
  getFirstEnemy,
  createFirstEnemy,
  createSecondEnemy,
  getSecondEnemy,
  createThirdEnemy,
  getThirdEnemy
} = require("../controllers/enemyCtrl");

const { battle } = require("../controllers/battleCtrl");

// New Game
router.get("/newGame" , newGame);
router.post("/newGame" , addNewCharacter);
router.post("/generateOrcSkirmisher", createFirstEnemy);
// Chapter One
router.get("/chapterOne", myCurrentCharacter, chapterOne);
router.get("/chapterOneA", myCurrentCharacter, chapterOneA);
router.get("/chapterOneBattle", myCurrentCharacter, getFirstEnemy, chapterOneBattle);
router.get("/battle", myCurrentCharacter, getFirstEnemy, battle);
router.get("/battleVictory", myCurrentCharacter, battleVictory);
// Chapter Two
router.post("/generateSecondEnemy",createSecondEnemy);
router.get("/chapterTwo", myCurrentCharacter, chapterTwo);
router.get("/chapterTwoA", myCurrentCharacter, chapterTwoA);
router.get("/chapterTwoBattle", myCurrentCharacter, getSecondEnemy, chapterTwoBattle);
router.get("/battleTwo", myCurrentCharacter, getSecondEnemy, battle);
router.get("/battleVictoryTwo", myCurrentCharacter, battleVictoryTwo);
// Chapter Three
router.post("/generateThirdEnemy",createThirdEnemy);
router.get("/chapterThree", myCurrentCharacter, chapterThree);
router.get("/chapterThreeA", myCurrentCharacter, chapterThreeA);
router.get("/chapterThreeBattle", myCurrentCharacter, getThirdEnemy, chapterThreeBattle);
router.get("/battleThree", myCurrentCharacter, getThirdEnemy, battle);
router.get("/battleVictoryThree", myCurrentCharacter, battleVictoryThree);
// win/lose //
router.get("/characterDeath", myCurrentCharacter, death);
router.post("/incrementWins",myCurrentCharacter, youWin);
router.post("/incrementLoss",myCurrentCharacter, death);

module.exports = router;