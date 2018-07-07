const express = require("express");
const bodyParser = require("body-parser");
const session = require('express-session');
const morgan = require('morgan');
const mongoose = require("mongoose");
const passport = require('passport');


const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;


// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev')); // for logging
console.log("process.env log", process.env.NODE_ENV);
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/dist/"));
}
// Add routes, both API and view
app.use(routes);

// initialize passport
app.use(session({secret: "keyboard cat", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://heroku_lpzn4w43:eh39cjr8ipejloq6cdel3u7i8o@ds119161.mlab.com:19161/heroku_lpzn4w43";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

// Set up passport to authenticate
const User = require('./models/User');
passport.use(new LocalStrategy(User.authenticate()));
passport.use(new GoogleStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
