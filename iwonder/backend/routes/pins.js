var express = require('express');
var router = express.Router();
const db = require('../data/pins')

router.get('/',db.getAllPins)

module.exports = router;
