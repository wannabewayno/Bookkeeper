import React, { useState } from 'react';
import { Container, FormContainer, SearchBar, InlineContainer, FrostedGlass,  useLiftState  } from '@wannabewayno/reactor';
import './style.css';
import { saveBook } from '../../utils/API';
import { searchBooks } from '../../utils/API/googleBooks';
import ResultContainer from '../../components/ResultContainer';
import Book from '../../components/Book';

export default function Search() {

    const [liftedStates, liftUpState ] = useLiftState()

    function handleFormSubmit(formData){
        console.log('FORM DATA:',formData);
        console.log(liftedStates);
        searchBooks(formData).then(books => liftedStates.setResultContainerData(books.data.items));
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

            <FrostedGlass>
            	<ResultContainer results={[]} liftUpState={liftUpState}>
            	    <Book/>
            	</ResultContainer>
            </FrostedGlass>
           
        </Container>
    )
}