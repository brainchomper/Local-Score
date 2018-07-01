const router = require("express").Router();
const transactionAPI = require("./transactionAPI");

// Book routes
router.use("/transactionfeed", transactionAPI);

module.exports = router;
