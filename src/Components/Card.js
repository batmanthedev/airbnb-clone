import React from 'react';

export default function Card(props) {

    console.log(props);

    return (
        <>
            {props.item.open_spots == 0 && <div className='card-badge'>SOLD OUT</div>}
            <img src={require(`../img/${props.item.image}`)} alt={props.item.alt} />
            <p>
                <span className='rating'> <i>★</i> {props.item.rating} ({props.item.number_of_reviews})</span>
                <span className='country'> • {props.item.country}</span>
            </p>
            <p className='title'>{props.item.title}</p>
            <p className='price'><b>From {props.item.price}</b> / person</p>
        </>
    )
}
