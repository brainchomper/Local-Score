const router = require("express").Router();
const pController = require ("../../controllers/productController.js");
const app = require("express");

//api/products/newProduct
router.route("/newProduct")
	.post(pController.newProduct);

	router.route("/All")
	.get(pController.findAll)

	module.exports = router;
