const express = require("express");
const router = express.Router();
router.all("*", (req, res) => {
  res
    .status(200)
    .send(
      'Endpoints:\n Get Account: https://mongo-crud-api-bbel.onrender.com/getAccount/:id \n Create Account: https://mongo-crud-api-bbel.onrender.com/createAccount/ \n  Delete Account : https://mongo-crud-api-bbel.onrender.com/deleteAccount/:id \n  Update Account : https://mongo-crud-api-bbel.onrender.com/updateAccount/:id \n'
    );
});
module.exports = router;
