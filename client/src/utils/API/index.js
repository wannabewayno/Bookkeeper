import axios from 'axios';

export const getBooks = () => {
    return axios.get('/api/books')
}

export const saveBook = bookData => {
    console.log('client side API:',bookData);
    return axios.post('/api/books',bookData)
}

export const crossCheckBooks = bookIDs => {
    console.log('crossCheckBooks(): bookIDs ->',bookIDs);
    return axios.post('/api/books/check',bookIDs)
}