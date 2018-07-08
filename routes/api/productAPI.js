const router = require("express").Router();
const pController = require ("../../controllers/productController.js");
const app = require("express");

//api/products/newProduct
router.route("/newProduct/")
	.post(pController.newProduct);

	module.exports = router;
