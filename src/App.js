import React from 'react';
import logo from './logo.svg';
import './App.css';

import RestaurantType from './RestaurantType';
import RestaurantList from './RestaurantList';
import Restaurant from './Restaurant';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>Restaurant App</h1>
//         <RestaurantType />
//         <RestaurantList />
//       </header>
//     </div>
//   );
// }

class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      type: '',
      restaurant: {}
    }
  }



  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Restaurant App</h1>
          <RestaurantType handleClick={this._setStateType}/>
          <RestaurantList />
        </header>
      </div>
    );
  }


  _setStateType = (type) => {
    this.setState({
      type
    }, () => {
      console.log(type);
    })
  }

  _setStateList = (restaurant) => {
    this.setState({
      restaurant
    }, () => {
      console.log(restaurant);
    })
  }






}



export default App;
