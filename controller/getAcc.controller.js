const getAccountDatabase = require("../service/getAcc.service");
const getAccount = async (req, res) => {
  try {
    const accNo = Number(req.params.account_details);
    const data = await getAccountDatabase(accNo);
    console.log(data);
    if (data) {
      res.status(200).json(data);
      console.log(`Document Found Successful`);
    } else {
      throw new Error();
    }
  } catch (err) {
    console.log("Document not found");
    res.status(404).json("DOcument Not Found");
  }
};
module.exports = getAccount;
