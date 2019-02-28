var express = require('express');
var router = express.Router();
const db = require ('../data/users');

/* GET users listing. */
router.get('/', db.getAllUsers);
router.get('/:id', db.getSingleUser);
router.post('/',db.makeUser);
router.patch('/:id',db.patchUser)
router.delete('/:id',db.deleteUser)

module.exports = router;
