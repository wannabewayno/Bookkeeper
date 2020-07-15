// Use the Book schema in booksController
const { Book } = require('../models');

// Methods for the booksController
module.exports = {
    findAll(req,res) {
        Book.find()
        .then(books => res.json(books))
        .catch(error => res.status(422).json(error));
    },
    findById(req,res) { 
        Book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(error => res.status(422).json(error));
    },
    save(req,res) { 
        Book.create(req.body)
        .then(response => res.json(response))
        .catch(error => res.status(422).json(error));
    },
    delete(req,res) {
        Book.deleteOne({ _id: req.params.id })
        .then(deletedBook => res.json(deletedBook))
        .catch(error => res.status(422).json(error));
    },
}