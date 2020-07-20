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
        const response = await axios.post('/api/books',bookData)
        return response;
        console.log('Response:',response);
    } catch {
        console.error('an error occured getting books');
    }
}