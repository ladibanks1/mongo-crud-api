const express = require('express');
const router = express.Router();
const getAccount = require('../controller/getAcc.controller');
router.get("/:account_details", getAccount )
module.exports = router