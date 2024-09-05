const delAccountDatabase = require("../service/deleteAcc.service");
const deleteAccount = async (req, res) => {
  try {
    const data = Number(req.params.account_number);
    const del =  await delAccountDatabase(data);
    if(del.deletedCount === 0){
      res.status(404).send("Incorrect Account Number")
    }else{
      res.status(200).send("Deleted Succesfully")
    }
    
  } catch (err) {
    console.log("Unable to delete");
  }
};
module.exports = deleteAccount;
