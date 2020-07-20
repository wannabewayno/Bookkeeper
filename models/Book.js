const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema
// ==============================================================================

const bookSchema = new Schema({
    bookID: { type: String, unique:true },
    title: String,
    subtitle: String,
    authors: [ String ],
    description: String,
    imageLinks: { 
        thumbnail: { type: String }
    },
    infoLink: String,
    averageRating: Number,
    categories: [String],
});

const Book = mongoose.model('Book', bookSchema );
module.exports = Book; 