import axios from 'axios'


export function searchBooks(formData) {
    console.log('SearchBooks:',formData);
    const { query , title, author, subject } = formData
    console.log(query,title,author,subject);
    const baseQuery = 'https://www.googleapis.com/books/v1/volumes?q='
    const inQuery = query?query:'';
    const inAuthor = author?`inauthor:${author}`:'';
    const inTitle = title?`intitle:${title}`:'';
    const inSubject = subject?`subject:${subject}`:'';

    // const url = 'https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes'
    const url = baseQuery+inQuery+inAuthor+inTitle+inSubject;

    return axios.get(url)
    .then(books => {
        return books.data.items.map(item => {
            const { id } = item;
            const bookInfo = item.volumeInfo;
            bookInfo.bookID = id;
            return bookInfo;
        })
    })
    .catch(error => {
        console.error('Error:',error.response.data.error.message);
        return []
    })
}