import React, { Component } from 'react';
import './App.css';
import Recipe from './Recipe';

class App extends Component {

  //kann in Klassen die extends Component haben, die Variablem setzen
  state = {
    //Array
    recipes: [
      {name: 'Levoceti', pieces: 3},
      {name: 'Pantopra', pieces: 1},
      {name: 'Pille', pieces: 25}
    ],
    otherState:'some other value'
  }

//Funktion anlegen für Behavior bei Klick
  switchNameHandler = () => {
    //console.log('Was clicked');
    // DONT DO THIS: this.state.recipes[0] = 'Aspirin';
    //nur recipes wird "geupdated", otherState bleibt wie es ist
    this.setState({
      recipes: [
        {name: 'Aspirin', pieces: 3},
        {name: 'Pantopra', pieces: 1},
        {name: 'Pille', pieces: 25}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1> Hi I am a react app</h1>
        <p>This is working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Recipe name={this.state.recipes[0].name} pieces={this.state.recipes[0].pieces}/>
        <Recipe name={this.state.recipes[1].name} pieces={this.state.recipes[1].pieces}>Anmerkung: Jeden morgen einnehmen</Recipe> {/*Anmerkung ist childrenProperty, siehe Recipe.js*/}
      </div>
    );
  }
}

export default App;
