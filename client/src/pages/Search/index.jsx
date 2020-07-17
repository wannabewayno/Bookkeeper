import React, { useState } from 'react';
import { Container, FormContainer, SearchBar, ResultContainer, InlineContainer, Arctext } from '@wannabewayno/reactor';
import './style.css';
import { createBook } from '../../utils/API';

export default function Search(){

    // const [ bookQuery, setBookQuery ] = useState({});
    // const [ bookData, setBooKData ] = useState([]);

    function handleFormSubmit(formData){
        console.log('FORM DATA:',formData);
        createBook(formData);
    } 

    return (
        <Container>
            <div style={{backgroundColor:'rgb(26,116,88)', width:'fit-content', margin:'auto',padding:'0.5rem',borderRadius:'5px'}}>Feeling bookish?</div>

            <FormContainer onSubmit={handleFormSubmit}>
                <InlineContainer gap='1rem' minWidth='150px'>
                	<SearchBar name={{display:'',id:'title',toDisplay:true}} backgroundColor='rgb(26,116,88)'/>
                	<SearchBar name={{display:'',id:'authors'}} backgroundColor='rgb(26,116,88)'/>
                	<SearchBar name={{display:'',id:'description'}} backgroundColor='rgb(26,116,88)'/>
                </InlineContainer>
                <button type='submit'>Submit</button>
            </FormContainer>

            <Arctext>
                this is Arctext
            </Arctext>

            <ResultContainer results={[]}>
                <div></div>
            </ResultContainer>

        </Container>
    )
}