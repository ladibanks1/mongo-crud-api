const express = require('express');
const createAccRouter = require('./router/createAcc.route');
const updateAccRouter = require('./router/updateAcc.route');
const {connectToDatatbase , closeDatabase} = require('./config/connection.config');
const deleteAccRouter = require('./router/deleteAcc.route');
const notFoundRouter = require('./router/notfound.route');
const port = process.env.PORT;
const getAccRouter = require('./router/getAcc.route');
const app = express();
app.use(express.json())

app.all("*" , (req , res , next) => {
    console.log(`${req.method} http://${req.hostname}${req.originalUrl}`)
    next()
})
app.use("/createAccount" , createAccRouter);
app.use("/updateAccount" , updateAccRouter);
app.use("/deleteAccount" , deleteAccRouter);
app.use("/getAccount" , getAccRouter )

app.use(notFoundRouter)
app.listen( port, async() => {
    await connectToDatatbase();
    console.log(`Server running at http://localhost:${port}`)
})

