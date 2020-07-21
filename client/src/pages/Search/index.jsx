import React, { useState } from 'react';
import { Container, FormContainer, SearchBar, InlineContainer, FrostedGlass,  useLiftState, SubmitButton  } from '@wannabewayno/reactor';
import './style.css';
import { saveBook, crossCheckBooks } from '../../utils/API';
import { searchBooks } from '../../utils/API/googleBooks';
import ResultContainer from '../../components/ResultContainer';
import Book from '../../components/Book';

export default function Search() {

    const [liftedStates, liftUpState ] = useLiftState()

    function handleFormSubmit(formData){
        // start a spinner
        searchBooks(formData)
        .then(books => {
            console.log(books);
            // ok extract all google id's
            const bookIDs = books.map(({ bookID }) => bookID);
            console.log(bookIDs);
            // cross reference these to your DB and note the matches.
            return Promise.all([crossCheckBooks(bookIDs),books]);
        })
        .then(([crossCheckData,books]) => {
            // extract all IDs that matched
            const matchedIDs = crossCheckData.data.map(book => book.bookID);
            if(matchedIDs.length > 0){
                // create a matcher to separate books data from ones already in our collection
                const idMatcher = new RegExp(matchedIDs.join('|'),'g')
                // separate all this data
                return books.map(book => {

                    if((book.bookID.match(idMatcher)||[]).length > 0) {
                        book.saved=true
                        return book
                    } else {
                        book.saved=false
                        return book
                    }
                })
            } else {
                // no matches just return the books
                return books
            }
        })
        .then(books => {
            // cancel spinner
            liftedStates.setResultContainerData(books)
        })
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

                <SubmitButton size='medium' text='Search' color='rgb(26,116,88)' style={{textAlign:'center', margin:'0 auto'}}/>

            </FormContainer>

            <FrostedGlass>
            	<ResultContainer results={[]} liftUpState={liftUpState}>
            	    <Book/>
            	</ResultContainer>
            </FrostedGlass>
           
        </Container>
    )
}