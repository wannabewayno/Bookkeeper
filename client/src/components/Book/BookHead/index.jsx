import React from 'react';
import StarRating from '../../StarRating';
import { headStyle, infoStyle, headingStyle, authorsStyle, buttonContainerStyle } from './style'
import { Button, Link } from '@wannabewayno/reactor'
// import Button from '../../buttons/buttons/Button';

export default function BookHead({ title, rating, authors, handleClick, isSaved, infoLink }) {

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
                    <span>Written by: </span>{authors?authors.map((author,index,array) => returnAuthor(author,index,array.length)):null}
                </h6>
            </div>
            <div style={buttonContainerStyle}> 
                <Link
                    size='small'
                    color='rgb(26,116,88)'
                    text='View'
                    href={infoLink?infoLink:'#'}
                />
                <Button
                    size='small'
                    color={isSaved?'hsl(0,70%,40%)':'rgb(26,116,88)'}
                    onClick={handleClick}
                    text={isSaved?'un-Save':'Save'}
                />
            </div>
        </section>
    )
}