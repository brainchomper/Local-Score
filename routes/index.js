const express = require("express");
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const app = express();
const logins = require("./logins")
const AuthRoutes = require("../Auth/index");



// API Routes
	router.use("/api", apiRoutes);
//Joe's routes for the logins
	router.use("/auth", AuthRoutes);
// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/index.js"));
});

module.exports = router;
