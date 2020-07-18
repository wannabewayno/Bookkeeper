const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema
// ==============================================================================

const bookSchema = new Schema({

    title: String,
    authors: [ String ],
    description: String,
    image: String,
    link: String,
    averageRating: Number,
    categories: Number,

});

const Book = mongoose.model('Book', bookSchema );
module.exports = Book; 