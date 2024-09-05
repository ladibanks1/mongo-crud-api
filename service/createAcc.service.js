// const connectToDatatbase = require("../config/connection.config");
const {database} = require('../config/connection.config');
const createAccount = async (details) => {
  try {
    const db = database()
    await db.insertOne(details)
    console.log("Inserted Document Successfully")
  } catch (err) {
    console.log("Error Inserting Document" , err.message)
  }
};
module.exports = createAccount;
