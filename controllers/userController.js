const db = require("../models");
const seedFileUsers = [
	{
		FirstName: "John",
	LastName: "Stuart",
	// tracks the products that the user has bought on the app or created.  
	Inventory: [],
	Picture: "String",
	SocialKey: 17
	},
	{
		FirstName: "Kevin",
	LastName: "Smith",
	// tracks the products that the user has bought on the app or created.  
	Inventory: [],
	Picture: "String",
	SocialKey: 18
	},
	{
		FirstName: "Joe",
	LastName: "Calderon",
	// tracks the products that the user has bought on the app or created.  
	Inventory: [],
	Picture: "String",
	SocialKey: 19
	}
	,
	{
		FirstName: "Alex",
	LastName: "Butler",
	// tracks the products that the user has bought on the app or created.  
	Inventory: [],
	Picture: "String",
	SocialKey: 20
	}
]

module.exports = {
  findAll: function(req, res) {
		db.User.find({})
      .then(userResults => {
				res.send(userResults)
				})
				.catch(err => res.status(422).json(err));

			},
			findOrCreate: function(req, res) {
				db.User.findOrCreate({ SocialKey: req.body.SocialKey }).then( uResult => {
					// we will need to build out the JSON object that we pass through on the API call to update the info.  Need to work with Joe to see what is available in the call. 
					db.User.findByIdAndUpdate(uResult._id,
						{$set: req.body}, function(err, result){
							if (err) {
								console.log("err: ", err)
							}
							console.log("Result was: " + result);
							res.send(result);
						})
				})
				.catch(err => json(err));

			},
			updateUser: function(req, res) {
				db.User.findByIdAndUpdate(req.body._id, {$set:req.body}, function(err, result){
					if (err) {
						console.log("err: ", err)
						res.status(422).json(err)
					}
					console.log("Result was: " + result);
					res.send(result);
				})
			},
			newUser: function(req, res) {
				console.log(seedFileUsers)
				db.User.collection.insertMany(seedFileUsers)
				.then(dbResult =>{
				console.log("Yas it worked");
				process.exit(0)
				})
				.catch(err => {
					console.error(err);
					process.exit(1);
			})
		}
	};
		
