import React from 'react';

// Import an Object from Restaurant.js
import {Restaurants} from './Restaurant';
import RestaurantList from './RestaurantList';


function displayRest(e) {
    console.log(e.target.id + " was clicked.");
    // return e.target.id;
    let restType = e.target.id;
    console.log("test");
    console.log(restType);
    return restType;
};

// Function that will display Restaurant Types
function RestaurantType(props) {

    // Print in console the values to access values needed
    console.log(Object.keys(Restaurants));

    let typeArray = Object.keys(Restaurants);
    let displayType = typeArray.map((restType) => {
        return <button onClick={(e) => {props.handleClick(e.target.id)}} id={restType}> {restType} </button>
        });

    return (
        <div>
            <p>Restaurant Types (Click for Resturants):</p>
            {displayType}
            {/* <RestaurantList type={this.displayRest} /> */}
        </div>
    );
}

export default RestaurantType;
