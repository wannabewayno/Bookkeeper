import React, { useRef, useEffect, useState } from 'react';
import { InlineContainer } from  '@wannabewayno/reactor';
import BookHead from './BookHead';
import BookBody from './BookBody';
import { bookStyle } from './style';
import { saveBook } from '../../utils/API/index.js';

export default function Book ({ data, saved=false }) {
    
    const { bookID, authors, averageRating, categories, description, title, imageLinks, subtitle, infoLink } = data;

    const [bookData, setBookData] = useState({
        bookID,
        authors,
        averageRating,
        categories,
        description,
        title,
        imageLinks,
        subtitle,
        infoLink,
    })

    // Saves book to MongoDB
    function clickSave(event){
        // get the button that was clicked.
        const ref = event.currentTarget;

        console.log(bookData);
        // trigger spinner
        saveBook(bookData)
        .then(response => console.log(response))
        .catch(error => console.log('Client side:',error.response));
        // server response: stop Spinner
    }

    let thumbnail;
    if(imageLinks) thumbnail = imageLinks.thumbnail;


    const bookDiv = useRef();

    // useEffect(() => {const x = window.matchMedia("(max-width: 700px)")
    //     console.log(x);
    //     myFunction(x) // Call listener function at run time
    //     x.addListener(myFunction) // Attach listener function on state changes 
    // },[]) 

    // function myFunction(x) {
    //     if (x.matches) { // If media query matches
    //       bookDiv.current.style.backgroundColor = "transparent";
    //     } else {
    //       bookDiv.current.style.backgroundColor = "transparent";
    //     }
    // } 

    return (
        <li ref={bookDiv} style={bookStyle}>
            <BookHead
                title={title}
                rating={averageRating}
                authors={authors}
                clickSave={clickSave}
                saved={saved}
            />
            <BookBody
                description={description}
                thumbnail={thumbnail}
                categories={categories}
            />
        </li>
    )
}