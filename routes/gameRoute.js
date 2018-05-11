'use strict';

const { Router } = require("express");
const router = Router();
const {
  newGame,
  chapterOne,
  chapterOneA,
  chapterOneBattle,
  battleVictory,
  chapterTwo
} = require("../controllers/gameCtrl");

const {
  myCurrentCharacter,
  addNewCharacter
} = require("../controllers/characterCtrl");

const {
  getFirstEnemy,
  createFirstEnemy,
  createSecondEnemy,
  getSecondEnemy
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
router.get("/battle", myCurrentCharacter, getSecondEnemy, battle);

module.exports = router;