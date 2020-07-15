const router = require("express").Router();
const { booksController } = require("../../controllers");

// Matches with "/api/books"
router
  .route("/")
  .get(booksController.findAll)
  .post(booksController.save);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .delete(booksController.remove);

module.exports = router;