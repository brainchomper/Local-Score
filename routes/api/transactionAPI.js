const router = require("express").Router();
const txnController = require ("../../controllers/txnController.js");
const app = require("express");

// Matches with "/api/TransactionFeed
router.route("/")
  .get(txnController.findAll);

// router.get('/', (req, res) => {
// 	console.log('hi jason')
// })

// Matches with "/api/books/:id"


module.exports = router;
