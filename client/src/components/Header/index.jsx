import React from 'react';
import './style.css';
import logo from './bookkeeper-logo-modern-symmetrical.png';

export default function Header(){
    return (
        <header className='header'>
            <nav className='navbox'>
                <a href="/">Search</a>
                <figure>
                	<img src={logo} alt="bookkeeper logo"/>
                </figure>
                <a href="/saved">Saved</a>
            </nav>
        </header>
    )
}