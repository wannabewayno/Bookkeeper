import React from 'react';
import { Container, FormContainer, ResultContainer, SearchBar, InlineContainer, FrostedGlass,  useLiftState, SubmitButton, Button, ShowOnClick } from '@wannabewayno/reactor';
import './style.css';
import { crossCheckBooks } from '../../utils/API';
import { searchBooks } from '../../utils/API/googleBooks';
import Book from '../../components/Book';

export default function Search() {

    const [liftedStates, liftUpState ] = useLiftState()

    function handleFormSubmit(formData){
        // start a spinner
        searchBooks(formData)
        .then(books => {
            
            if(!books) books = [{title:'no results found'}]
            // ok extract all google id's
            const bookIDs = books.map(({ bookID }) => bookID);
           
            // cross reference these to your DB and note the matches.
            return Promise.all([crossCheckBooks(bookIDs),books]);
        })
        .then(([crossCheckData,books]) => {
            // extract all IDs that matched
            const matchedIDs = crossCheckData.data.map(book => book.bookID);
            if(matchedIDs.length > 0) {
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

    const queryLabel    = {id:'query'};
    const titleLabel    = {display:'Title',id:'title',toDisplay:true};
    const authorLabel   = {display:'Author',id:'author',toDisplay:true};
    const categoryLabel = {display:'Category',id:'subject',toDisplay:true};
    const placeholder = 'refine by...'

    return (
        <Container>
            <div style={{backgroundColor:'rgb(26,116,88)', width:'fit-content', margin:'auto',padding:'0.5rem',borderRadius:'5px'}}>Feeling bookish?</div>

            <FormContainer onSubmit={handleFormSubmit}>

                <SearchBar name={queryLabel} backgroundColor='rgb(26,116,88)' icon container={{marginBottom:'1rem'}}/>
                        
                <ShowOnClick transitionTime='500ms' showOnMount>
                    <div>
                        <InlineContainer gap='1rem' minWidth='225px'>
                            <SearchBar name={titleLabel} backgroundColor='rgb(26,116,88)'  placeholder={placeholder} label={{padding:'0 1.2rem'}}/>
                            <SearchBar name={authorLabel} backgroundColor='rgb(26,116,88)' placeholder={placeholder} label={{padding:'0 0.75rem'}}/>
                            <SearchBar name={categoryLabel} backgroundColor='rgb(26,116,88)' placeholder={placeholder}/>
                        </InlineContainer>
                    </div>
                    <Button
                        size='x-small'
                        skin='flat'
                        text='Advanced'
                        color='rgb(255,125,125)'
                    />
                </ShowOnClick>

                <SubmitButton
                    size='medium'
                    text='Search'
                    skin='flat'
                    color='rgb(26,116,88)'
                    style={{textAlign:'center', margin:'-2rem auto'}}
                />

            </FormContainer>

                        

            <FrostedGlass style={{marginTop:'2.5rem'}}>
            	<ResultContainer liftUpState={liftUpState}>
            	    <Book/>
            	</ResultContainer>
            </FrostedGlass>
           
        </Container>
    )
}