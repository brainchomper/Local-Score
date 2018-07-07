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
		db.User.findOne({SocialKey: req.body.SocialKey})
		.then(result => {
			console.log("The result is: " + result)
		if (result === null) {
			console.log(req.body.user);
			db.User
			.create(req.body.user)
			.then(newUser => {
				console.log("New User information: " + newUser)
				res.json("newUser info: " + newUser)})

			.catch(err => res.json("error: " + err))
		}
		else {
			db.User
			.findByIdAndUpdate( result._id, {$set: req.body})
			.then(updatedUser => res.json("updated user:" + updatedUser))
			.catch(err => res.json("Error at update user:" + err))
		}
		})
	//catch for the end of the fucntion
		.catch(err => res.json(err))
		// db.User.findOrCreate({ SocialKey: req.body.SocialKey }).then( uResult => {
		// 	// we will need to build out the JSON object that we pass through on the API call to update the info.  Need to work with Joe to see what is available in the call. 
		// 	console.log("req.body" , req.body);
		// 	db.User.findByIdAndUpdate(uResult._id,
		// 		{$set: req.body}, function(err, result){
		// 			if (err) {
		// 				console.log("err: ", err)
		// 			}
		// 			console.log("Result was: " + result);
		// 			res.send(result);
		// 		})
		// 		.catch(err => json(err))
		// })
		// .catch(err => json(err));

	},
	updateUser: function (req, res) {
		db.User.findByIdAndUpdate(req.body._id, { $set: req.body }, function (err, result) {
			if (err) {
				console.log("err: ", err)
				res.status(422).json(err)
			}
			console.log("Result was: " + result);
			res.send(result);
		})
	},
	newUser: function (req, res) {
		console.log(req.body);
		db.User.create(req.body)
			.then(res.send("NEW USER BOARDED"))
			.catch(err => {
				console.error(err);
				process.exit(1);
			})
	}
};

