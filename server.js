// load env variables
require('dotenv').config();

// require all dependencies
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
// ==============================================================================
// configure app to use data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set static assets path
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API routing
// ==============================================================================
app.use(require('./routes'))

// Start the App
// ==============================================================================
// Connect to MongoDB
require('./config/mongoConnect')
// Launch App
.then(connected => app.listen(PORT, () => console.log(`🌎 ==> API server now on port ${PORT}!`)))
// Log error, shut down
.catch(error  => console.log("Can't establish a connection with MongoDB: App shutting down"))
