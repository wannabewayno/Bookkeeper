export default function initializeFormSubit(liftedStates) {

    return function (formData) {
        // start a spinner
        searchBooks(formData)
        .then(books => {
            console.log(books);
            // ok extract all google id's
            const bookIDs = books.map(({ bookID }) => bookID);
            console.log(bookIDs);
            // cross reference these to your DB and note the matches.
            return Promise.all([crossCheckBooks(bookIDs),books]);
        })
        .then(([crossCheckData,books]) => {
            // extract all IDs that matched
            const matchedIDs = crossCheckData.data.map(book => book.bookID);
            if(matchedIDs.length > 0){
                // create a matcher to separate books data from ones already in our collection
                const idMatcher = new RegExp(matchedIDs.join('|'),'g')
                // separate all this data
                return books.map(book => {
                    if((book.bookID.match(idMatcher)||[]).length > 0) {
                        book.saved=true
                        return book
                    } else {
                        book.saved=false
                        return book
                    }
                })
            } else {
                // no matches just return the books
                return books
            }
        })
        .then(books => {
            // cancel spinner
            liftedStates.setResultContainerData(books)
        })
    }
} 