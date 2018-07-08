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
		const {SocialKey, Email} = req.body.user;
		const uniqueCheck = SocialKey === "" ? {Email: Email} : {SocialKey: SocialKey};
		console.log(uniqueCheck);
		db.User.findOne(uniqueCheck)
		.then(result => {
			console.log("The result is: of the unique check is" + result)
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

