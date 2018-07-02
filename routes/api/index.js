const router = require("express").Router();
const transactionAPI = require("./transactionAPI");
const userAPI = require('./userAPI');

// Use the Transactions route 
router.use("/transactions", transactionAPI);

//Use the Users route
router.use("/users", userAPI);



module.exports = router;
