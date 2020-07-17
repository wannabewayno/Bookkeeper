import axios from 'axios'

export async function searchBooks(formData){
    console.log('SearchBooks:',formData);
    const API_KEY = `&key=`;
    const baseQuery = 'https://www.googleapis.com/books/v1/volumes?q='
    const general = '';
    const inAuthor = `inauthor:${''}`;
    const inTitle = `intitle:${''}`;
    const subject = `subject${''}`;

    const query = 'https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes'

    try {
        return await axios(query+API_KEY,{
            credentials:'include',
            mode:'cors',
            headers:{
                'Content-type':'application/json'
            }
        });
    } catch(error) {
        console.error('An error occured searching for books:',error);
    }
}