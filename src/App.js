import React, { Component } from 'react';
import './App.css';
import Recipe from './Recipe';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi I am a react app</h1>
        <p>This is working</p>
        <Recipe name="Levo" pieces="3"/>
        <Recipe name="Panto" pieces="1">Anmerkung: Jeden morgen einnehmen</Recipe>
      </div>
    );
  }
}

export default App;
