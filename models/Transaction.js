const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
	Party1: { type: Schema.ObjectId, ref: "User" },
	Party2: { type: Schema.ObjectId, ref: "User" },
	Party2Approved: {type: Boolean, required: true, default: false },
	// pricing, qty, etc for sale transactions
	Details: [],
	// product details for transformation transactions, creation etc
	// options are available on the front end for control
	// also references from the inventory 
	ProductDetails: [],
	// timestamp
	Date: { type: Date, default: Date.now },
	// this is how we reference all the IDs within a single loop instead of having to do a complex sort/filter/rerun.  We can just push to this field with all the items from the original query.
	PreviousTxns: [],
	// we can stamp the product origination ID into this field.  
	//   if (OriginID) ? return null: updateOriginID(Transaction :_id)
	OriginID: {type: String, required: true},

	// tracks if either party rejected the transaction
	Rejected: {type: Boolean, required: true },
	// tracks if both parties have accepted the transactions
	Completed: 	{type: Boolean, required: true, default: false },

});

const Transaction = mongoose.model("Transaction", TransactionSchema);

module.exports = Transaction;
