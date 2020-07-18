import React, { useRef, useEffect } from 'react';

export default function Book ({ data }) {
    console.log(data);
    const { volumeInfo:{ authors, averageRating, categories, description, title, imageLinks } } = data;
    console.log(categories);

    let thumbnail;
    if(imageLinks) thumbnail = imageLinks.thumbnail;


    const bookDiv = useRef();

    useEffect(() => {const x = window.matchMedia("(max-width: 700px)")
    console.log(x);
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes 
},[]) 

    function myFunction(x) {
        if (x.matches) { // If media query matches
          bookDiv.current.style.backgroundColor = "yellow";
        } else {
          bookDiv.current.style.backgroundColor = "pink";
        }
      }
      
      

    return (
        <div ref={bookDiv}>
            <h5>{title}</h5>
            {thumbnail?<img src={thumbnail}/>:<p>no image to display</p>}
            <div>
                {authors.map((author,index) => <span key={index}>{author}</span>)}
            </div>
            <p>{description}</p>
            <div>
                {categories?categories.map((category,index) => <span key={index}>{category}</span>):null}
            </div>
            <p>{averageRating}</p>
        </div>
    )
}