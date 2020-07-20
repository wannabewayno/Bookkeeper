const router = require("express").Router();
const { booksController } = require("../../controllers");
console.log(booksController);

// Matches with '/api/books'
router
  .route("/")
  .get(booksController.findAll)
  .post(booksController.save);

// Matches with '/api/books/:id'
router
  .route("/:id")
  .get(booksController.findById)
  .delete(booksController.delete);

// Matches with '/api/books/check'
router
  .route('/check')
  .post(booksController.crossCheck)
module.exports = router;