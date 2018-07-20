const db = require("../models");


// Defining methods for the booksController
module.exports = {
	findAll: function (req, res) {
		db.Transaction
			.find({})
			.populate("Party1")
			.populate("Party2")
			.populate("ProductID")
			.sort({ Date: -1 })
			.then(dbModel => {
				console.log(dbModel)
				res.send(dbModel)

			})
			.catch(err => res.status(422).json(err));
	},
	// find all the transactions associated with the product id
	findHistory: function (req, res) {
		let placeholder = [];
		console.log("...................")
		console.log(req.params.id)
		db.Transaction
			.find({ ProductID: req.params.id})
			.populate("Party1")
			.populate("Party2")
			.populate("ProductID")
			// if the result doesn't have any PreviousTxns in the key then we know that the transaction is an origination and we can just send it
			.then((productResult) => {
				console.log(productResult)
				const completedOnly = productResult.filter( each => {
					console.log(each.Completed);
					each.Completed && !each.Rejected
				} )
				res.json(productResult)
			})
			.catch("I am writing a catch statement")
	},

	rejectTxn: function (req, res) {
		console.log(req.params)
		db.Transaction.findById(req.params.id)
			.then(txnCheck => {
				if (!txnCheck.Rejected || !txnCheck.Completed) {
					//do the things
					console.log("txncheck: " , txnCheck)

					db.Transaction
						.findByIdAndUpdate(
						req.params.id ,
						{ "$set": { "Rejected": true, "Completed": true } },
						(err, response) => {
							 if(err) {return res.json(err)} 
							 console.log(response)
							 res.json(response)}
						)
						.catch(err => console.log(err))
				} else {
					// else don't do the things
					return res.send("FAILURE");
				}
			})
	},

	approveTxn: function (req, res) {
		console.log(req.params)
		db.Transaction.findById(req.params.id)
			.then(txnCheck => {
				if (!txnCheck.Rejected || !txnCheck.Completed) {
					//do the things
					console.log(txnCheck)
					db.Transaction
						.findByIdAndUpdate(
						req.params.id,
						{ "$set": { "Completed": true, "Party2Approved": true } },
						(err, response) => {
							if(err) {return res.json(err)} 
							console.log(response)
							res.json(response)}
					 )
					 .catch(err => console.log(err))
			 } else {
				 // else don't do the things
				 return res.send("FAILURE");
			 }
		 })
 },
	//end reject txn

	newTxn: function (req, res) {
		// make a new transaction
		console.log(req.body.newTxn)
		db.Transaction.create(req.body.newTxn)
			// take the new info 
			.then((postTxn, err) => {
				if (err) {
					return console.log(err);
				}
				console.log("-------------------")
				console.log(postTxn)
				console.log("-------------------")

				// query the product database and update the TxnHistory Array to include the newTxn
				db.Product.findByIdAndUpdate(req.body.newTxn.ProductID, { "$push": { "TxnHistory": postTxn._id } }, (err, result) => {
					if (err) {
						return console.log(err)
					}
					result.validate = true;
					res.json(result);
				}
				)
			})
			.catch(console.log("we are doing .catch for some reason"))
	},

	allUserTxns: function (req, res) {
		// first we populate the Transactions w/ the user info
		db.Transaction
			.find({})
			.populate("Party2")
			.populate("Party1")
			.populate("ProductID")
			// then we use a filter on the results to return only where the user submitted is in slot one
			.then(allTxns => {
				// if the user is in slot 1 that means that they were the submitter of the transaction according to the data schema we set up			
				// we are pinging the server as /api/transactions/:userID so this is why we pass this params in
				const TWOO = allTxns.filter(txn => txn.Party1._id.toString() === req.params.userID && !txn.Completed)
				const TWOM = allTxns.filter(txn => txn.Party2._id.toString() === req.params.userID && !txn.Completed);
				const COMPLETED = allTxns
					.filter(txn => (
						(txn.Party1._id.toString() === req.params.userID && txn.Completed)
						||
						(txn.Party2._id.toString() === req.params.userID && txn.Completed)))
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