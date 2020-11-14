import React from 'react';

const Card = ({ name, email, id, city }) => {
    return (
        <div className='bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-3'>
            <img alt='123' src={`https://robohash.org/set_set4/${id * 4}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>City: {city}</p>
            </div>
        </div>
    );
}

export default Card;