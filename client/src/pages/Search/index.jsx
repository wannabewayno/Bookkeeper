import React, { useState } from 'react';
import { Container, FormContainer, SearchBar, Button, ResultContainer } from '@wannabewayno/reactor';
import './style.css';
import { getBooks, createBook } from '../../utils/API';

export default function Search(){

    const [ bookQuery, setBookQuery ] = useState({});
    const [ bookData, setBooKData ] = useState([]);

    function handleFormSubmit(formData){
        console.log('FORM DATA:',formData);
        createBook(formData);
    } 

    return (
        <Container>
            <div style={{backgroundColor:'rgb(26,116,88)', width:'fit-content', margin:'auto',padding:'0.5rem',borderRadius:'5px'}}>Feeling bookish?</div>
            <FormContainer onSubmit={handleFormSubmit}>
                <SearchBar name={{display:'',id:'title'}}/>
                <SearchBar name={{display:'',id:'authors'}}/>
                <SearchBar name={{display:'',id:'description'}}/>
                <button type='submit'>Submit</button>
            </FormContainer>
            <ResultContainer results={[]}>
                <div></div>
            </ResultContainer>
        </Container>
    )
}