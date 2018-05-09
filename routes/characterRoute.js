'use strict';

const { Router } = require("express");
const router = Router();
const { myCurrentCharacter } = require("../controllers/characterCtrl");

router.get("/character", myCurrentCharacter);

module.exports = router;