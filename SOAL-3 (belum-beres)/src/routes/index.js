const express = require("express");
const router = express.Router();
const {getPeople} = require("../controllers/index");

router.get('/peoples', getPeople);

module.exports = router;