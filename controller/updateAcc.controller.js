const updateAcc = require("../service/updateAcc.service");
const updateAccDetails = async (req, res) => {
  try {
    const accNumber = Number(req.params.account_number);
    const updatedDetails = req.body;
    const update = await updateAcc(accNumber, updatedDetails);
    if (update.matchedCount === 0) {
      throw new Error();
    } else {
      res.status(200).send("Updated Successfully");
      return;
    }
  } catch (err) {
    console.log("Account Number is Incorrect");
    res.status(404).send("Account Number is Incorrect");
  }
};
module.exports = updateAccDetails;
