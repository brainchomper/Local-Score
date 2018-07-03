const router = require("express").Router();
const uController = require ("../../controllers/userController.js");
const app = require("express");

// Matches with "/api/users/
router.route("/All")
  .get(uController.findAll);

router.route("/UserLogin/")
	.get(uController.findOrCreate(PassportInfo))
// router.get('/', (req, res) => {
// 	console.log('hi jason')
// })

// Matches with "/api/books/:id"


module.exports = router;
