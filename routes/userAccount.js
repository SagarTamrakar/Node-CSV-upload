const express = require('express');
const {createUserAccount, getUserAccount, updateUserAccount, deleteUserAccount} = require('../controllers/userAccount')
const router = express.Router()

router.post('/',createUserAccount);
router.get('/:_id',getUserAccount);
router.put('/:_id', updateUserAccount);
router.delete('/:_id', deleteUserAccount);

module.exports = router;
