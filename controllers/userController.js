const db = require("../models");


module.exports = {
	findAll: function (req, res) {
		db.User.find({})
			.then(userResults => {
				res.send(userResults)
			})
			.catch(err => res.status(422).json(err));

	},
	findOrCreate: function (req, res) {
		console.log(req)
		//deconstruct the item sent over by the request
		const {SocialKey, Email} = req.body.user;
		//use a unique variable to identify the user, allows them to enter their email or their SocialKey
		const uniqueCheck = SocialKey === "" ? {Email: Email} : {SocialKey: SocialKey};
		console.log(uniqueCheck);
		// use the variable to check in the database
		db.User.findOne(uniqueCheck)
		//see if there is a user with the email or socialkey
		.then(result => {
			console.log("The result is: of the unique check is" + result)
			//if not then we will create a new user using the json object passed through from the req
		if (result === null) {
			console.log(req.body.user);
			db.User
			.create(req.body.user)
			.then(newUser => {
				console.log("New User information: " + newUser)
				res.json("newUser info: " + newUser)})

			.catch(err => res.json("error: " + err))
		}
		//otherwise we will update the existing user to get their most recent picture and name.
		else {
			db.User
			.findByIdAndUpdate( result._id, {$set: req.body})
			.then(updatedUser => res.json("updated user:" + updatedUser))
			.catch(err => res.json("Error at update user:" + err))
		}
		})
	//catch for the end of the function
		.catch(err => res.json(err))
	},

};

