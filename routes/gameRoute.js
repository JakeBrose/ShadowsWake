'use strict';

const { Router } = require("express");
const router = Router();
const {
  newGame,
  chapterOne,
  chapterOneA,
  chapterOneBattle,
} = require("../controllers/gameCtrl");

const {
  myCurrentCharacter,
  addNewCharacter
} = require("../controllers/characterCtrl");

const {
  getFirstEnemy,
  createOrcSkirmisher
} = require("../controllers/enemyCtrl");

const { battle } = require("../controllers/battleCtrl");

router.get("/newGame" , newGame);
router.post("/newGame" , addNewCharacter);
router.post("/generateOrcSkirmisher", createOrcSkirmisher);
router.get("/chapterOne", myCurrentCharacter, chapterOne);
router.get("/chapterOneA", myCurrentCharacter, chapterOneA);
router.get("/chapterOneBattle", myCurrentCharacter, getFirstEnemy, chapterOneBattle);
router.get("/battle", myCurrentCharacter, getFirstEnemy, battle);

module.exports = router;