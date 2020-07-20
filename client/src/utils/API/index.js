import axios from 'axios';

export const getBooks = () => {
    return axios.get('/api/books')
}

export const saveBook = bookData => {
    return axios.post('/api/books',bookData);
}

export const crossCheckBooks = bookIDs => {
    return axios.post('/api/books/check',bookIDs);
}

export const deleteBook = bookID => {
    return axios.delete(`api/books/${bookID}`);
}