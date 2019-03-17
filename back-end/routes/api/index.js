var express = require('express');
var cors = require('cors');
var comics = require('./comics');
var router = express.Router();

router.use(cors());

router.use('/comics', comics);

module.exports = router;
