import axios from 'axios'


export async function searchBooks(formData){
    console.log('SearchBooks:',formData);
    const API_KEY = `&key=AIzaSyCRF6tILXxOwY99z6s-LAUJFM1oaV2YyCI`;
    const baseQuery = 'https://www.googleapis.com/books/v1/volumes?q='
    const general = '';
    const inAuthor = `inauthor:${''}`;
    const inTitle = `intitle:${''}`;
    const subject = `subject${''}`;

    const query = 'https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes'

    try {
        const results = await axios.get(query)
        return results.data.items.map(item => {
            const { id } = item;
            const bookInfo = item.volumeInfo;
            bookInfo.bookID = id;
            return bookInfo;
        })
        
    } catch(error) {
        console.error('An error occured searching for books:',error);
    }
}