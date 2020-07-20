const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema
// ==============================================================================

const bookSchema = new Schema({

    title: String,
    subtitle: String,
    authors: [ String ],
    description: String,
    imageLinks: { String },
    infoLink: String,
    averageRating: Number,
    categories: Number,

});

const Book = mongoose.model('Book', bookSchema );
module.exports = Book; 