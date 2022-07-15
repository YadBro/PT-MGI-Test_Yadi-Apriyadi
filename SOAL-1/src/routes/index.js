const express = require("express");
const {getCarts} = require('../controllers/carts');
const router = express.Router();


router.get('/carts', getCarts);

module.exports = router;