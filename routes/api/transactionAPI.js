const router = require("express").Router();
const txnController = require ("../../controllers/txnController.js");
const app = require("express");

// Matches with "/api/transactions/All
router.route("/All")
  .get(
		txnController.findAll);

// match for the individual transaction routes being passed as /api/transactions/:id
router.route("/:id")
	.get(txnController.findHistory);

router.route("/new_transaction")
		.post(txnController.newTxn);

router.route("/rejectTxn/:id")
		.put(txnController.rejectTxn);

router.route("/approveTxn/:id")
		.put(txnController.approveTxn);

router.route("/PWOM/:userID")
		.get(txnController.TWOM)

router.route("/PWOO/:userID")
		.get(txnController.TWOO)


module.exports = router;
