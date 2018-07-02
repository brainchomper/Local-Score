const express = require("express");
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const app = express();
const logins = require("./logins")



// API Routes
	router.use("/api", apiRoutes);
//Joe's routes for the logins
	router.use("/logins", logins);
// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/docs/index.js"));
});

module.exports = router;
