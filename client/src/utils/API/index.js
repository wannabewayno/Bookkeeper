export const getBooks = async () => {
    try {
        const books = await fetch('/api/books');
        console.log(books);
    } catch {
        console.error('an error occured getting books');
    }
}

export const saveBook = async bookData => {
    console.log('client side API:',bookData);
    try {
        const response = await fetch('/api/books',{
            method:'POST',
            headers: {
                "Content-type": "application/json"
            },
            body:JSON.stringify(bookData)
        });
        console.log('Response:',response);
    } catch {
        console.error('an error occured getting books');
    }
}