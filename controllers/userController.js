const db = require("../models");
const gravatar = require("gravatar");
const bcrypt = require('bcryptjs');

module.exports = {
	findAll: function (req, res) {
		db.User.find({})
			.then(userResults => {
				console.log("The user results: " , userResults)
				const trimmedUsers = userResults.map(user => {
					const {FirstName, LastName, _id} = user
					return {
						FirstName: FirstName,
						LastName: LastName,
						_id: _id
					}
				})
				console.log("the updated trimmed user:", trimmedUsers)
				res.json(trimmedUsers)
			})

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
	registerFn: (req, res) => 	{
		db.Register.findOne({ email: req.body.email })
		.then(user => {
			if(user) {
				return res.status(400).json({email: 'Email already exists'});
			} else {
				const avatar = gravatar.url(req.body.email, {
					s: '200', // size
					r: 'pg', // rating
					d: 'mm' // default
				});
	
				const newUser = new User({
					name: req.body.name,
					email: req.body.email,
					avatar,
					password: req.body.password
				});
	
				bcrypt.genSalt(10, (err, salt) => {
					bcrypt.hash(newUser.password, salt, (err, hash) => {
						if(err) throw err;
						newUser.password = hash;
						newUser.save()
						.then(user => res.json(user))
						.catch(err => console.log(err));
					})
				})
			}
		})
	}
};

// @route  GET api/users/login
// @desc   Login User / Returning JWT Token
// @access Public
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Find User by email
  User.findOne({ email }).then(user => {
    // Check for user
    if (!user) {
      return res.status(404).json({ email: "User not found" });
    }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
				// User Matched
				const payload = { id: user.id, name: user.name, avatar: user.avatar } // Create JWT payload

				// sign token
				jwt.sign(
					payload, 
					keys.secretOrKey, 
					{ expiresIn: 3600 }, 
					(err, token) => {
						res.json({
							success: true,
							token: 'Bearer ' + token
						});
				});
      } else {
        return res.status(400).json({ password: "Password incorrect" });
      }
    });
  });
});

// @route  GET api/users/current
// @desc   Return current user
// @access Private
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
	res.json({
		id: req.user.id,
		name: req.user.name,
		email: req.user.email
	}); 
});