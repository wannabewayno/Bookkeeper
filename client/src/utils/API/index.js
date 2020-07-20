import axios from 'axios';

export const getBooks = async () => {
    try {
        return (await axios.get('/api/books')).data
    } catch {
        console.error('an error occured getting books');
    }
}

export const saveBook = async bookData => {
    console.log('client side API:',bookData);
    try {
        return await axios.post('/api/books',bookData)
    } catch(error) {
        console.log('Error saving book', error);
        return error
    }

}