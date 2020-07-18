import React from 'react';

export default function StarRating ({ rating, padding, starGap, fontSize }) {

    //configure some defaults
    if(!padding) padding = '0.5rem';
    if(!starGap) starGap = '0.25rem';
    if(!fontSize) fontSize = 'inherit';

    const containerStyle = { 
        padding: padding,
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
    }

    const starStyle = { 
        margin:`0 ${starGap}`,
        fontSize
    }

    const Ratings = []
    for (let index = 0; index < rating; index++) {
        Ratings.push(<span style={starStyle} key={index} role='img' aria-label='star emoji'>⭐</span>)
    }

    return (
        <div style={containerStyle}>
            {Ratings}
        </div>
    )
}