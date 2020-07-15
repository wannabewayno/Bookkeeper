const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
// ==============================================================================

// configure app to use data parsing
// ======================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set static assets path
// ======================================
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API routing
// ==============================================================================
app.use(require('./routes'))

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start the App
// ==============================================================================
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
