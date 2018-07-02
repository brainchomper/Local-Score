const router = require("express").Router();
const txnController = require ("../../controllers/txnController.js");
const app = require("express");

// Matches with "/api/transactions/All
router.route("/All")
  .get(
		txnController.findAll
	);


module.exports = router;
