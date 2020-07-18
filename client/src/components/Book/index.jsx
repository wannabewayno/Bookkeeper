import React, { useRef, useEffect } from 'react';
import { InlineContainer } from  '@wannabewayno/reactor';
import BookHead from './BookHead';
import BookBody from './BookBody';
import { bookStyle } from './style';

export default function Book ({ data }) {
    // console.log(data);
    const { authors, averageRating, categories, description, title, imageLinks, subtitle, infoLink } = data;

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
            />
            <BookBody
                description={description}
                thumbnail={thumbnail}
                categories={categories}
            />
        </li>
    )
}