import React from 'react'

// Import an Object from Restaurant.js
import {Restaurants} from './Restaurant';

function RestaurantList(props) {


    // Print in console the values to access values needed
    console.log("List of Restaurants");
    console.log(props.type);
    console.log(Object.keys(Restaurants.mediterranean));

    return (
        <div>
          <p>Restaurants (Click for menu):</p>
        </div>
      );
}

export default RestaurantList
