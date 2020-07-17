import React, { useState } from 'react';
import { Container, FormContainer, SearchBar, ResultContainer, InlineContainer, Arctext } from '@wannabewayno/reactor';
import './style.css';
import { createBook } from '../../utils/API';
import { searchBooks } from '../../utils/API/googleBooks';

export default function Search(){

    // const [ bookQuery, setBookQuery ] = useState({});
    // const [ bookData, setBooKData ] = useState([]);

    async function handleFormSubmit(formData){
        console.log('FORM DATA:',formData);
        const books = searchBooks(formData);
        console.log(books);
    } 

    return (
        <Container>
            <div style={{backgroundColor:'rgb(26,116,88)', width:'fit-content', margin:'auto',padding:'0.5rem',borderRadius:'5px'}}>Feeling bookish?</div>

            <FormContainer onSubmit={handleFormSubmit}>
                <InlineContainer gap='1rem' minWidth='200px'>
                    <InlineContainer gap='1rem' minWidth='200px'>
                        <SearchBar name={{display:'',id:'search',toDisplay:true}} backgroundColor='rgb(26,116,88)'/>
                        <SearchBar name={{display:'',id:'title',toDisplay:true}} backgroundColor='rgb(26,116,88)'/>
                    </InlineContainer>
                    <InlineContainer gap='1rem' minWidth='200px'>
                        <SearchBar name={{display:'',id:'author',toDisplay:true}} backgroundColor='rgb(26,116,88)'/>
                        <SearchBar name={{display:'',id:'subject',toDisplay:true}} backgroundColor='rgb(26,116,88)'/>
                    </InlineContainer>
                </InlineContainer>
                <button type='submit'>Submit</button>
            </FormContainer>

            <ResultContainer results={[]}>
                <div></div>
            </ResultContainer>
           
        </Container>
    )
}