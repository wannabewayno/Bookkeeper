import React, { useState, useEffect } from 'react';

/**
 * By default ref will be the target of the hovder element unless otherwise specified
 * @param  {Element}  [ref=currentTarget] - the reference of an element to execute callback with if necessary
 * @param  {Function} [callback=null] - callabck to execute when the hover state is true
 * @return {} - 
 */
export default function useOnActive (ref,callback) {

    const[ active, setActive ] = useState({
        state:false,
        ref:null
    })

    useEffect(()=>{console.log('active:',active.state,active.ref)},[active])

    function onMouseDown(event) {
        setActive({
            state:true, ref:event.target
        })
    }

    function onMouseUp(event) {
        setActive({state:false, ref:event.target})
    }

    return {
        onMouseDown,
        onMouseUp
    }
}