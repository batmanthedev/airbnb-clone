import React from 'react';
import photoGrid from '../img/pgoto-grid.png';

export default function Hero() {
    return (
        <>
            <div className='photo-grid'>
                <img src={photoGrid} alt='photo grid images' />
            </div>

            <h1>Online Experiences</h1>
            <p>
                Join unique interactivce activities led byb one of a kind hsots all without leaving home.
            </p>
        </>
    )
}