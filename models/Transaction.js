const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
	Party1: { type: Schema.ObjectId, ref: "User" },
	Party2: { type: Schema.ObjectId, ref: "User" },
	Party2Approved: { type: Boolean, required: true, default: false },
	TxnDate: { type: Date, default: Date.now },

	Price: {},

	ProductID: { type: Schema.ObjectID, ref: "Product"},
	Rejected: { type: Boolean, default: false },
	Completed: { type: Boolean, required: true, default: false },

});

const Transaction = mongoose.model("Transaction", TransactionSchema);

module.exports = Transaction;
