const express = require('express');
const {createPolicy, getPolicy, updatePolicy, deletePolicy} = require('../controllers/policy')
const router = express.Router()

router.post('/',createPolicy);
router.get('/:_id',getPolicy);
router.put('/:_id', updatePolicy);
router.delete('/:_id', deletePolicy);

module.exports = router;
