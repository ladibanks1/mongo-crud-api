const createAccount = (req, res, next) => {
  const details = req.body;
  const arr = ["first_name", "last_name", "age", "nin"];
  const checkDetails = arr.every((key) => details.hasOwnProperty(key));
  if (checkDetails) {
    const generateAccNumber = [];
    for (let i = 0; generateAccNumber.length < 10; i++) {
      const num = Math.floor(Math.random() * 10);
      generateAccNumber.push(num);
    }
    const accountNumber = generateAccNumber.join("");
    details.account_number = Number(accountNumber);
    next();
  } else {
    res.status(404).send("Account Details was incomplete");
  }
};
module.exports = createAccount;
