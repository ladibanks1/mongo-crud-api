const express = require('express');
const router = express.Router();
const accDetailsMiddleware = require('../middleware/createAcc.middleware');
const accDetails = require('../controller/createAcc.controller');
router.post("/" , accDetailsMiddleware, accDetails)
module.exports = router