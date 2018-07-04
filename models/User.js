const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const findOrCreate = require("mongoose-find-or-create")

const UserSchema = new Schema ({
	FirstName: {type: String, required: true},
	LastName: {type: String, required: true},
	// tracks the products that the user has bought on the app or created.  
	Inventory: [],
	Picture: {type: String, required: true},
	SocialKey: {type: String, unique: true, required: true}
})

UserSchema.plugin(findOrCreate);

const User = mongoose.model("User", UserSchema);

module.exports = User;
