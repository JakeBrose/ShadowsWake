'use strict';

const { Router } = require("express");
const router = Router();
const { myProfileView } = require("../controllers/profileCtrl");

router.get("/profile", myProfileView);

module.exports = router;