const router = require("express").Router();
const booksRoutes = require("./books.routes");

// Books routes
router.use("/books", booksRoutes);

module.exports = router;
