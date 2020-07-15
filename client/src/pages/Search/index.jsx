import React, { useState } from 'react';
import { Container, FormContainer, SearchBar, Button } from '@wannabewayno/reactor';
import './style.css';

export default function Search(){

    const [ bookQuery, setBookQuery ] = useState({});

    function handleFormSubmit(formData){
        console.log(formData);
        setBookQuery(formData);
    } 

    return (
        <Container>
            <div>Search page</div>
            <FormContainer onSubmit={handleFormSubmit}>
                <SearchBar name={{display:'',id:'title'}}/>
                <SearchBar name={{display:'',id:'author'}}/>
                <SearchBar name={{display:'',id:'description'}}/>
                <button type='submit'>Submit</button>
            </FormContainer>
        </Container>
    )
}