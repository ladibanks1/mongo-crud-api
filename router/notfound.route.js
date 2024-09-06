const express = require("express");
const router = express.Router();
router.all("*", (req, res) => {
  res.status(200).send(
    `<h1>Endpoints:</h1>
       <p>Get Account:<a href="https://mongo-crud-api-bbel.onrender.com/getAccount/">/getAccount/:account_number</a></p>
       </p> 
       <p>Create Account: 
        <a href="https://mongo-crud-api-bbel.onrender.com/createAccount">/createAccount</a>
       </p>
       <p>Delete Account: 
        <a href="https://mongo-crud-api-bbel.onrender.com/deleteAccount/">/deleteAccount/:account_number</a>
       <p>Update Account:
        <a href="https://mongo-crud-api-bbel.onrender.com/updateAccount/">/updateAccount/:account_number</a>
       </p>
       `
  );
});
module.exports = router;
