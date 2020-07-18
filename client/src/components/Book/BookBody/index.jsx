import React, { useRef, useEffect } from 'react';
import placeholder from './placeholder.png';
import { thumbnailStyle, bodyStyle, categoryStyle, descriptionStyle, alignmentStyle } from './style';
import { useComputedStyle, InlineContainer } from '@wannabewayno/reactor';

export default function BookBody({ thumbnail, description, categories}){

    const descriptionRef = useRef();
    const thumbnailRef = useRef();

    useEffect(() => {
        // const height = useComputedStyle(descriptionRef,'height');
        // console.log(height);
        // thumbnailRef.current.style.maxHeight = height.value + height.unit;
        
    },[])

    return (
        <section style={bodyStyle}>
            <div style={alignmentStyle}>
                <img 
                    src={thumbnail?thumbnail:placeholder}
                    style={thumbnailStyle}
                    ref={thumbnailRef}
                />
                <p ref={descriptionRef} style={descriptionStyle}>{description}</p>
            </div>
            <div>
                {categories?categories.map((category,index) => <span key={index}>{category}</span>):null}
            </div>
        </section>
    )
}