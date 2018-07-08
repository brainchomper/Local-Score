const router = require("express").Router();
const uController = require ("../../controllers/userController.js");
const app = require("express");

// Matches with "/api/users/
router.route("/All")
  .get(uController.findAll);

	//Matches with /api/users/UserLogin
router.route("/UserLogin")
	.put(uController.findOrCreate)

router.route("/newUser")
.post(uController.newUser)

module.exports = router;
