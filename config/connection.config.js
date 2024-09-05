const { MongoClient, ObjectId } = require("mongodb");
const uri = process.env.URI;
const client = new MongoClient(uri);
const demo = "Demo";
const connectToDatatbase = async () => {
  try {
    await client.connect();
    console.log("Connecting To Database")
  } catch (err) {
    console.log("Error Connecting To Database");
  }
};
const database = () => {
  const db = client.db(demo).collection("account_details");
  return db;
}
const closeDatabase = async() => {
  try{
    await client.close()
    console.log("Closed Client")
  }catch(err){
    console.log("Error closing The connection" + err.message)
  }
}
module.exports = {connectToDatatbase , database , closeDatabase};
