const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
// const passport = require('passport');
// const passportSetup = require('./config/passport-setup');
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
console.log("process.env log", process.env.NODE_ENV);
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/dist/"));
}
// Add routes, both API and view
app.use(routes);

// initialize passport
// app.use(passport.initialize());
// app.use(passport.session());

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://heroku_z6khhtb6:bpk11r963bgmcsbldc62uck9q2@ds125001.mlab.com:25001/heroku_z6khhtb6";

console.log(MONGODB_URI);

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, 
{useNewUrlParser: true});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
