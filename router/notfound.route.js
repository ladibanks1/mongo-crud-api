const express = require('express');
const router = express.Router();
router.all("*" , (req , res) => {
    res.status(404).send("ERROR PAGE NOT FOUND")
})
module.exports = router