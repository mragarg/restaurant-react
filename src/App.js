import React from 'react';
import logo from './logo.svg';
import './App.css';

import RestaurantType from './RestaurantType';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Restaurant App</h1>
        <RestaurantType />
      </header>
    </div>
  );
}

export default App;
