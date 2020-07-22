import React, { useRef, useState } from 'react';
import BookHead from './BookHead';
import BookBody from './BookBody';
import { bookStyle } from './style';
import { saveBook, deleteBook } from '../../utils/API/index.js';

export default function Book ({ data }) {

    const { bookID, authors, averageRating, categories, description, title, imageLinks, subtitle, infoLink, saved } = data

    const [ isSaved, setIsSaved ] = useState(saved)
    const  [ bookData ] = useState({
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

    function handleClick(){
        if(isSaved){
            clickDelete();
            return
        } else {
            clickSave();
            return
        }
    }


    // Saves book to MongoDB
    function clickSave(){
        // server processing: trigger spinner
        saveBook(bookData)
        .then(() => {
            // server responded: stop Spinner
            // set State
            setIsSaved(true);
        })
        .catch(error => console.log(error.response))
    }

    // Removes book from MongoDB
    function clickDelete(){
        // server processing: trigger spinner
        deleteBook(bookData.bookID)
        .then(() => {
            // server responded: stop Spinner
            // set State
            setIsSaved(false);
        })
        .catch(error => console.log(error.response))
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
                handleClick={handleClick}
                isSaved={isSaved}
            />
            <BookBody
                description={description}
                thumbnail={thumbnail}
                categories={categories}
            />
        </li>
    )
}