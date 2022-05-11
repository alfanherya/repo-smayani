const express = require('express');
const router = express.Router();
const db = require('../config/db.config');
const controller = require('../controllers/index');

router.get('/cekdata', controller.cekdataguru.getdataguru);

module.exports = router;