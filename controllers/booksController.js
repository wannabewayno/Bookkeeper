// Use the Book schema in booksController
const { Book } = require('../models');

console.log('the Book model:',Book);

// Methods for the booksController
module.exports = {
    findAll(req,res) {
        Book.find({})
        .then(books => res.json(books))
        .catch(error => res.status(422).json(error));
    },
    findById(req,res) { 
        Book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(error => res.status(422).json(error));
    },
    save(req,res) {
        console.log('Save controller!');
        console.log(req.body);
        Book.create(req.body)
        .then(response => {console.log('response back from the Save controller!'); res.json(response)})
        .catch(error => {
            console.log(error)
            const { code } = error
            console.log('ERROR CODE:', code);
            res.status(422).json({
                errors:[
                    { errorCode: code, }
                ]
            })
        });
    },
    delete(req,res) {
        Book.deleteOne({ _id: req.params.id })
        .then(deletedBook => res.json(deletedBook))
        .catch(error => res.status(422).json(error));
    },
}