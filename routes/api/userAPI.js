const router = require("express").Router();
const uController = require ("../../controllers/userController.js");
const app = require("express");
const User = require("../../models/User");
const Register = require("../../models/Register")
const gravatar = require("gravatar");
const bcrypt = require('bcryptjs');

// Matches with "/api/users/
router.route("/All")
  .get(uController.findAll);

	//Matches with /api/users/UserLogin
router.route("/UserLogin")
	.put(uController.findOrCreate)

// matches with /api/users/register
router.post('/register', (req, res) => 	{
	Register.findOne({ email: req.body.email })
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
})

module.exports = router;
