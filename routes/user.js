const express = require('express');
const {createUser, getUser, updateUser, deleteUser} = require('../controllers/user')
const router = express.Router()

router.post('/',createUser);
router.get('/:_id',getUser);
router.put('/:_id', updateUser);
router.delete('/:_id', deleteUser)

module.exports = router;
