const db = require("../models");


// Defining methods for the booksController
module.exports = {
	findAll: function (req, res) {
		db.Transaction
			.find({})
			.sort({ Date: -1 })
			.then(dbModel => {

				res.send(dbModel)

			})
			.catch(err => res.status(422).json(err));
	},
	// find all the transactions associated with the product id
	findHistory: function (req, res) {
		db.Product
			.findById(req.params.id)
			.populate('TxnHistory')
			// if the result doesn't have any PreviousTxns in the key then we know that the transaction is an origination and we can just send it
			.then(productResults => {
				const nonRejects = productResults.TxnHistory.filter( each => {
					// if the product wasn't rejected and it's completed
					if (!each.Rejected && each.Completed ){
						return each
					}
				})
				res.json(nonRejects)
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
	
	allUserTxns: function (req, res) {
		// first we populate the Transactions w/ the user info
		db.Transaction
			.find({})
			.populate("Party2")
			.populate("Party1")
			.populate("ProductID")
			// then we use a filter on the results to return only where the user submitted is in slot one
			.then( allTxns => {
				// if the user is in slot 1 that means that they were the submitter of the transaction according to the data schema we set up				
				// we are pinging the server as /api/transactions/:userID so this is why we pass this params in
				const TWOO = allTxns.filter(txn => txn.Party1._id.toString() === req.params.userID && !txn.Completed)
				const TWOM = allTxns.filter(txn => txn.Party2._id.toString() === req.params.userID && !txn.Completed);
				const COMPLETED = allTxns
				.filter(txn => (
					txn.Party1._id.toString() === req.params.userID && txn.Completed && txn.Party1._id.toString() != txn.Party2._id.toString()) 
					|| 
					(txn.Party2._id.toString() === req.params.userID && txn.Completed && txn.Party1._id.toString() != txn.Party2._id.toString()));
//build a response obj with the arrays
				const APIReturn = {
					TWOO: TWOO,
					TWOM: TWOM,
					COMPLETED: COMPLETED
				}
				res.json(APIReturn)
			})
			.catch(err => console.log(err))
	},
	
	}
