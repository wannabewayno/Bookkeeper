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
                liftedStates.setResultContainerData(results)
            })
        }
    },[liftedStates])

    function handleClick () {
        console.log(liftedStates);
    }

    return (
        <Container>

            <FrostedGlass
                shadow='xx-large'
                blur='x-small'
            >
               <ResultContainer results={[]} liftUpState={liftUpState}>
                   <Book/>
               </ResultContainer>
        
            </FrostedGlass>
            
        </Container>
    )
}