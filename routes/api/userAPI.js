const router = require("express").Router();
const uController = require ("../../controllers/userController.js");
const app = require("express");
const User = require("../../models/User");


// Matches with "/api/users/
router.route("/All")
  .get(uController.findAll);

	//Matches with /api/users/UserLogin
router.route("/UserLogin")
	.put(uController.findOrCreate)

// matches with /api/users/register
router.route("/register")
.post(uController.registerFn)

router.route("/passwordLogin")
	.post(uController.pwdLogin)

module.exports = router;
