const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
	FirstName: {type: String, required: true},
	LastName: {type: String, required: true},
	//are we still doing address?  I can build this out more specifically if so
	Address: {
		type: String, required: true
	},

	
	// list of boolean keys that we can use to identify different parties.  
	Grower: {type: Boolean, required: true},
	Distributor:  {type: Boolean, required: true},
	Reseller:  {type: Boolean, required: true},
	Customer:  {type: Boolean, required: true},
	// more specific info

	// business to business only
	B2B: {type: Boolean, required: true},
	// types of coffee sold, options that  can be controlled on the front end like ground, whole bean, roasted, unroasted etc
	types: [],
	// ways that the user modifies coffee, can be controlled on the front end
	Alterations:  [],
	// retail locations- tracked separate from the distributor location for instances of an off-site roaster
	// doubles as a way to track chains if array.length is > 1
	Locations: [],
	// tracks the products that the user has bought on the app or created.  
	Inventory: [],
	Picture: {type: String, required: true}
})

const User = mongoose.model("User", UserSchema);

module.exports = User;
