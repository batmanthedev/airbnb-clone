import React from 'react';
import logo from '../img/logo.png';

export default function Header() {
    return (
        <header>
            <nav>
                <img src={logo} alt='airbnb logo' width='100px' />
            </nav>
        </header>
    )
}