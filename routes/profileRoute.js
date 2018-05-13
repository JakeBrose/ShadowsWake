'use strict';

const { Router } = require("express");
const router = Router();
const { myProfileView } = require("../controllers/profileCtrl");
const { userWins, userLosses } = require("../controllers/characterCtrl");

router.get("/profile", userWins, userLosses, myProfileView);

module.exports = router;