import axios from 'axios';

export const getBooks = async () => {
    try {
        return (await axios.get('/api/books')).data
    } catch {
        console.error('an error occured getting books');
    }
}

export const saveBook = bookData => {
    console.log('client side API:',bookData);
    return axios.post('/api/books',bookData)
}