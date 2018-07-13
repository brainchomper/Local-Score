const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema ({
	FirstName: {type: String, required: true},
	LastName: {type: String, required: true},
	// tracks the products that the user has bought on the app or created.  
	Inventory: [],
	Picture: {type: String, required: true},
	SocialKey: {type: String},
	Email: {type: String, unique: true},
	Password: { type: String}
});

// UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", UserSchema);

module.exports = User;
