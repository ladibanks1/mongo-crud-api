const createAccountInDatabase = require('../service/createAcc.service');
const createAccount = async (req , res) => {
    try{
        const details = req.body;
    console.log(details);
    await createAccountInDatabase(details);
    return res.status(200).json(details);
    }catch(err){
        throw err
    }
}
module.exports = createAccount