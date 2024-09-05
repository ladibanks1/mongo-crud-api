const { database } = require("../config/connection.config");
const createAccount = async (accNumber, updatedDetails) => {
  try {
    const db = database();
    const updateAcc = await db.updateOne(
      { account_number: accNumber },
      {
        $set: {
          first_name: updatedDetails.first_name,
          last_name: updatedDetails.last_name,
          age: updatedDetails.age,
          nin: updatedDetails.nin,
        },
      }
    );
    return updateAcc;
  } catch (err) {
    console.log("Error Updating Document");
  }
};
module.exports = createAccount;
