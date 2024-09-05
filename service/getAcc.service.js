const {database} = require('../config/connection.config');

const getAccount = async(accNumber) => {
    try{
        const db = database();
        const find  = await db.findOne({ account_number: accNumber });
        return find;
    }catch(err){
        console.log("Unable to Find Document");
    }
}
module.exports = getAccount