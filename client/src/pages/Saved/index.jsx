import React, { useEffect } from 'react';
import { Container, FrostedGlass, useLiftState } from '@wannabewayno/reactor';
import './style.css';
import { getBooks } from '../../utils/API';
import ResultContainer from '../../components/ResultContainer';
import Book from '../../components/Book';

export default function Saved(){

    const [liftedStates, liftUpState] =  useLiftState();


    useEffect(() => {

        if (Object.keys(liftedStates).length > 0) {
            console.log(liftedStates);
            getBooks().then(results => {
                console.log(results);
                const books = results.data.map(book => {
                    book.saved = true
                    return book
                })
                liftedStates.setResultContainerData(books)
            })
        }
    },[liftedStates])

    return (
        <Container>

            <FrostedGlass
                shadow='xx-large'
                blur='x-small'
            >
               <ResultContainer liftUpState={liftUpState}>
                    <Book/>
                    <p style={{ padding:'2rem'}}>
                        Save some books to see them here!
                    </p>
               </ResultContainer>
        
            </FrostedGlass>
            
        </Container>
    )
}