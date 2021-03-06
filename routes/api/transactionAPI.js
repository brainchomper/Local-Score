const router = require("express").Router();
const txnController = require ("../../controllers/txnController.js");
const app = require("express");

// Matches with "/api/transactions/All
router.route("/feed")
  .get(
		txnController.findAll);

// match for the individual transaction routes being passed as /api/transactions/:id
router.route("/findHistory/:id")
	.get(txnController.findHistory);

router.route("/new_transaction")
		.post(txnController.newTxn);

router.route("/rejectTxn/:id")
		.get(txnController.rejectTxn);

router.route("/approveTxn/:id")
		.get(txnController.approveTxn);

router.route("/allUsersTxns/:userID")
		.get(txnController.allUserTxns);


module.exports = router;
