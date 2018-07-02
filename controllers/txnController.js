const db = require("../models");


// Defining methods for the booksController
module.exports = {
	findAll: function (req, res) {
		db.Transaction
			.find({})
			.sort({ Date: -1 })
			.then(dbModel => res.send(dbModel))
			.catch(err => res.status(422).json(err));
	},
	// find all the transactions associated with the transaction
	findHistory: function (req, res) {
		db.Transaction
			.findById(req.params.id)
			// if the result doesn't have any PreviousTxns in the key then we know that the transaction is an origination and we can just send it
			.then(function (dbResults) {
				if (!dbResults.PreviousTxns.length) {
					return res.json(dbResults)
					// if there is any length to the PreviousTxns Array then we do a for loop and concat the data into a placeholder item
				} else {
					let txnData = [];
					for (var i = 0; i < dbResults.PreviousTxns.length; i++) {
						db.Transaction.findById(dbResults.PreviousTxns[i])
							.then(function (prevTxnResults) {
								txnData.concat(prevTxnResults)
							})
							.catch(err => res.status(422).json(err));
					};
					res.json(txnData);
				}
			})
			.catch(err => res.status(422).json(err));
	},
	// create: function (req, res) {
	// 	db.Transaction
	// 		.create(req.body)
	// 		.then(dbModel => res.json(dbModel))
	// 		.catch(err => res.status(422).json(err));
	// },
	validateTxn: function (req, res) {
		const {userID, TransactionID} = req.body
		db.Transaction
		.findByID({_id: TransactionID})
		.then(txnResult => {
			const {Rejected, Completed} = txnResult;
			if (!Rejected || !Completed) {
				this.updateField(TransactionID, Party2Approved, true)
			}
		}
		)
		.catch(err => res.status(422).json(err))
	},
	rejectTxn: function (req, res) {
		const {userID, TransactionID} = req.body
		db.Transaction
		.findByID({_id: TransactionID})
		.then(txnResult => {
			const {Rejected, Completed} = txnResult;
			if (!Rejected || !Completed) {
				this.updateField(TransactionID, Rejected, true)
			}
		}
		)
		.catch(err => res.status(422).json(err))
	},
	// end reject txn
	updateField: function (txnId, fieldtoUpdate, updatedValue) {
		findOneAndUpdate({ _id: txnID }, { fieldtoUpdate: updatedValue })
		.catch(err => res.status(422).json(err))
	}
};
