const express = require('express');
const upload = require('../controllers/upload');
const router = express.Router()
router.post('/csvfile',upload);
module.exports = router