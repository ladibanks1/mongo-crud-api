const express = require('express');
const router = express.Router();
const updateAcc = require('../controller/updateAcc.controller');
router.patch("/:account_number" , updateAcc);
module.exports = router