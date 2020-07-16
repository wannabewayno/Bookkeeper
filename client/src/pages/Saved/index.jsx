import React from 'react';
import { Container, FrostedGlass, ResultContainer } from '@wannabewayno/reactor'
import './style.css';

export default function Saved(){

    return (
        <Container>
            <FrostedGlass
                shadow='xx-large'
                blur='x-small'
            >
               <ResultContainer results={[]}>
                   <div></div>
               </ResultContainer>
            </FrostedGlass>
        </Container>
    )
}