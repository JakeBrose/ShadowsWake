'use strict';

const { Router } = require("express");
const router = Router();
const { myProfileView } = require("../controllers/profileCtrl");
const { myCurrentCharacter , userWins, userLosses } = require("../controllers/characterCtrl");

router.get("/profile", myCurrentCharacter, userWins, userLosses, myProfileView);

module.exports = router;