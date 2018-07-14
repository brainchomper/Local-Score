const db = require("../models");

module.exports = {
	newProduct: function (req, res) {
		//reference the new product details we sent in from the boarding survery 
		const newProductDetails = req.body.newProduct;
		//console log for good measure
		console.log("this is the newProductDetails JSON OBJECT :", newProductDetails)
		// take the JSON obejct and make a new product with it
		db.Product.create(newProductDetails)
			.then(newProduct => {
				//destructure
				const { _id, TxnHistory } = newProduct;
				//build new object to make a new transaction
				//IE loading a product is a transaction and should be logged
				const txnInfo = {
					// both party1 and party2 are the same since there is no moving of goods between parties
					//this also means that the transaction is completed by default and approved by the non-existant second party by default
					Party1: newProductDetails.CreatedBy,
					Party2: newProductDetails.CreatedBy,
					Party2Approved: true,
					ProductID: _id,
					Completed: true
				};
				console.log(txnInfo), txnInfo
				// take the json object we just built for the txnInfo and create the new txn
				db.Transaction
					.create(txnInfo)
					// take the NEW txn information
					.then(newTxnInfo => {
						console.log("--------")
						console.log(newTxnInfo)
						console.log("--------")

						//double checking that the _id from above is still referencing the newProduct _id
						console.log("_id from new product: ", _id)
						// update the Product that we built by pushing into the TxnHistory
						db.Product
							.updateOne({ _id: _id }, { "$push": { "TxnHistory": newTxnInfo._id } }, (err, result) => {
								//end the function
								err ? res.json(err) : res.json("SUCCESS")
								// end of the giant function for new Product
							})
					})
			})
	},

	findAll: function(req, res) {
		db.Product.find({})
		.then(allProducts => res.json(allProducts))
		.catch("ugh")
	}

// this is the end of the exports
}