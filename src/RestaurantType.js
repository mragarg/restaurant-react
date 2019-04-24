import React from 'react';

// Import an Object from Restaurant.js
import {Restaurants} from './Restaurant';

function displayRest(e) {
    console.log(e.target.id + " was clicked.");
}

// Function that will display Restaurant Types
function RestaurantType(props) {

    // Print in console the values to access values needed
    console.log(Object.keys(Restaurants));

    let typeArray = Object.keys(Restaurants);
    let displayType = typeArray.map((restType) => {
        return <button onClick={displayRest} id={restType}> {restType} </button>
        });

    return (
        <div>
            <p>Restaurant Types (Click for Resturants):</p>
            {displayType}
            <p>Restaurants:</p>
        </div>
    );
}

export default RestaurantType;
