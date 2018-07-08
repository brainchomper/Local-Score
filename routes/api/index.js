const router = require("express").Router();
const transactionAPI = require("./transactionAPI");
const userAPI = require('./userAPI');
const productAPI = require('./productAPI.js');

// Use the Transactions route 
router.use("/transactions", transactionAPI);

// Use the Products route
router.use("/products", productAPI);

//Use the Users route
router.use("/users", userAPI);



module.exports = router;
