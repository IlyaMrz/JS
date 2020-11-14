import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    const cardArray = robots.map((user, i) => {
        return <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email} city={robots[i].address.city} />
    });
    return (
        <div>
            {cardArray}
        </div>

    );
}
export default CardList;