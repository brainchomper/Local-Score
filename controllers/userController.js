const db = require("../models");

module.exports = {
  findAll: function(req, res) {
		db.User.find({})
      .then(userResults => {
				res.send(userResults)
				})
				.catch()
			}
		};