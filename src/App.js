import React from 'react';

import Header from './Components/Header';
import Hero from './Components/Hero';
import Card from './Components/Card';

//import swimmerPhoto from './img/swimmer.png';

var cards = [
    {
        image: "swimmer.png",
        alt: "Photo of Katie Zaferes",
        rating: '5.0',
        number_of_reviews: 6,
        country: 'USA',
        title: 'Life lessons with Katie Zaferes',
        price: '$136',
        open_spots: 13
    },
    {
        image: "swimmer.png",
        alt: "Wedding photography photo",
        rating: '4.5',
        number_of_reviews: 17,
        country: 'South Africa',
        title: 'Learn wedding photography',
        price: '$125',
        open_spots: 1
    },
    {
        image: "swimmer.png",
        alt: "Group mountain biking photo",
        rating: '3.1',
        number_of_reviews: 41,
        country: 'Uganda',
        title: 'Group mountain biking',
        price: '$50',
        open_spots: 0
    }
]

export default function App() {
    return (
        <>
            <Header />
            <div className='container'>
                <div className='hero'>
                    <Hero />
                </div>
                <div className='cards'>
                    {
                        cards.map((c) => {
                            return <div className='card'>
                                <Card item = {c}/>
                                </div>
                        })
                    }
                </div>

            </div>
        </>

    )
}