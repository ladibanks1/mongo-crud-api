const express = require('express');
const router = express.Router();
const delAccount = require('../controller/deleteAcc.controller');
router.delete("/:account_number" ,  delAccount)
module.exports = router