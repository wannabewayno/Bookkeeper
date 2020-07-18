import React from 'react';
import StarRating from '../../StarRating';
import { headStyle, infoStyle, headingStyle, authorsStyle, buttonContainerStyle } from './style'
import { InlineContainer } from '@wannabewayno/reactor'
import Button from '../../Button';

export default function Head({title, rating, authors, }) {

    function returnAuthor(author ,index, length) {
        let separator = ', '
        if(index === length - 1) separator = ''
        if(index === length - 2) separator = ' & '
        return (<span key={index}>{`${author}${separator}`}</span>)
    }

    return (
        <section style={headStyle}>
            <div style={infoStyle}>
                <div style={headingStyle}>
                    <h5>{title}</h5>
                    <StarRating rating={rating}/>
                </div>
                <h6 style={authorsStyle}>
                    <span>Written by: </span>{authors.map((author,index,array) => returnAuthor(author,index,array.length))}
                </h6>
            </div>
            <div style={buttonContainerStyle}>
                <Button>View</Button>
                <Button>Save</Button>
            </div>
        </section>
    )
}