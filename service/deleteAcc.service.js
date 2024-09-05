const { database } = require("../config/connection.config");
const delAccount = async (accNumber) => {
  try {
    const db = database();
     const del = await db.deleteOne({ account_number: accNumber });
     return del
  } catch (err) {
    console.log("Error Deleting Document");
  }
};
module.exports = delAccount;
