import React, { useState, useEffect } from 'react';

/**
 * By default ref will be the target of the hovder element unless otherwise specified
 * @param  {Element}  [ref=currentTarget] - the reference of an element to execute callback with if necessary
 * @param  {Function} [callback=null] - callabck to execute when the hover state is true
 * @return {} - 
 */
export default function onHover (hoverStyle) {

    const[ hover, setHover ] = useState({
        state:false,
        ref:null,
    })

    function toggleState(hoverStyle) {

    }

    useEffect(()=>{
        // const { state, ref }
        // if(state) {

        // }
    },[hover])

    function onMouseEnter(event) {
        setHover({
            state:true, ref:event.target
        })
    }

    function onMouseLeave(event) {
        setHover({state:false, ref:event.target})
    }

    function onLoad(event) {
        console.log('onLoad is firing');
        console.log(event.target);
    }

    return {
        onMouseEnter,
        onMouseLeave,
        onLoad,
    }
}