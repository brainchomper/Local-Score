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
	// find all the transactions associated with the product id
	findHistory: function (req, res) {
		db.Product
			.findById(req.params.id)
			.populate('TxnHistory')
			// if the result doesn't have any PreviousTxns in the key then we know that the transaction is an origination and we can just send it
			.then(productResults => {
				res.json(productResults)
			})
	},
	rejectTxn: function (req, res) {
		db.Transaction.findById(req.params.id)
			.then(txnCheck => {
				if (!txnCheck.Rejected || !txnCheck.Completed) {
					//do the things
					db.Transaction
						.findByIdAndUpdate(
						{ _id: req.params.id },
						{ "$set": { "Rejected": true, "Completed": true } },
						(err, response) => err ? res.json(err) : res.json(response)
						)
						.catch(err => res.status(422).json(err))
				} else {
					// else don't do the things
					return res.send("FAILURE");
				}
			})
	},

	approveTxn: function (req, res) {
		db.Transaction.findById(req.params.id)
			.then(txnCheck => {
				if (!txnCheck.Rejected || !txnCheck.Completed) {
					//do the things
					db.Transaction
						.findByIdAndUpdate(
						{ _id: req.params.id },
						{ "$set": { "Completed": true, "Party2Approved": true } },
						(err, response) => err ? res.json(err) : res.json(response)
						)
				} else {
					// else don't do the things
					return res.send("FAILURE");
				}
			})
	},
	//end reject txn

	newTxn: function (req, res) {
		// make a new transaction
		db.Transaction.create(req.body.data)
			// take the new info 
			.then(newTxn => {
				// query the product database and update the TxnHistory Array to include the newTxn
				db.Product.findByIdAndUpdate(req.body.data.ProductID, { "$push": { "TxnHistory": newTxn._id } }, (err, result) => err ? res.json(err) : res.json("SUCCESS")
				)
			})
	},
	TWOM: function (req, res) {
		// first we populate the Transactions w/ the user info
		db.Transaction
			.find({})
			.populate("Party2")
			.populate("Party1")
			// then we go through all the transactions and only return those where the userId is set to party 2, since transactions are auto approved by the submitter as party 1
			.then(allTxns => {
				const TWOM = allTxns.filter(txn => txn.Party2._id === req.params.userID);
				console.log(TWOM)
				console.log("We are hitting TWOM")
				res.json(TWOM)
			})
			.catch(err => res.status(422).json(err))
	},
	TWOO: function (req, res) {
		// first we populate the Transactions w/ the user info
		db.Transaction
			.find({})
			.populate("Party2")
			.populate("Party1")
			// then we use a filter on the results to return only where the user submitted is in slot one
			.then(allTxns => {
				// if the user is in slot 1 that means that they were the submitter of the transaction according to the data schema we set up

				// we are pinging the server as /api/transactions/:userID so this is why we pass this params in
				const TWOO = allTxns.filter(txn => txn.Party1._id === req.params.userID);
				console.log(TWOO.length)
				console.log("We are hitting TWOO")
				res.json(TWOO)
			})
			.catch(err => res.status(422).json(err))
	},
	allUserTxns: function (req, res) {
		db.Transaction
			.find({})
			.populate("Party1")
			.populate("Party2")
			.then(allTxns => {
				// filter for where the user is the party1 or party2
				const usersTxns = allTxns.filter(txn => txn.Party1._id === req.params.id || txn.Party2._id);
				//trim out the user items from the parties in this giant stack
				const trimTxns = usersTxns.map(each => {
					// destructure
					const { Party1, Party2, TxnDate, Rejected, Completed, Party2Approved, Price } = each;
					//rebuild the party objects as smaller objects w/ less info
					const uParty1 = {
						FirstName: Party1.FirstName,
						LastName: Party1.LastName,
						Picture: Party1.Picture
					};
					const uParty2 = {
						FirstName: Party2.FirstName,
						LastName: Party2.LastName,
						Picture: Party2.Picture
					};
					// make the new trimmed txn
					const trimmedTxn = {
						Party1: uParty1,
						Party2: uParty2,
						TxnDate: TxnDate, 
						Rejected: Rejected, 
						Completed: Completed, 
						Party2Approved: Party2Approved, 
						Price: Price
					};
					return trimmedTxn;
				})
			})
	}

};
