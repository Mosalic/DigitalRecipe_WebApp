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
  switchNameHandler = (newName) => {
    //console.log('Was clicked');
    // DONT DO THIS: this.state.recipes[0] = 'Aspirin';
    //nur recipes wird "geupdated", otherState bleibt wie es ist
    this.setState({
      recipes: [
        {name: newName, pieces: 3},
        {name: 'Pantopra', pieces: 1},
        {name: 'Pille', pieces: 30}
      ]
    })
  }

//Funktion wird aufgerufen wenn sich im Inputfeld von Recipe.js was ändert
  nameChangedHandler = (event) => {
    this.setState({
      recipes: [
        {name: "testAspirin", pieces: 3},
        {name: event.target.value, pieces: 1},
        {name: 'Pille', pieces: 28}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1> Hi I am a react app</h1>
        <p>This is working</p>
        <button onClick={this.switchNameHandler.bind(this, 'Aspirin')}>Switch Name</button> {/*Hier wird der name in Apsirin geändert*/}
        <Recipe
            name={this.state.recipes[0].name}
            pieces={this.state.recipes[0].pieces}
        />
        <Recipe
            name={this.state.recipes[1].name}
            pieces={this.state.recipes[1].pieces}
            click={this.switchNameHandler.bind(this, 'Paracetamol')}
            changed={this.nameChangedHandler}> {/*Hier wird der name in Paracetamol geändert*/}
            Anmerkung: Jeden morgen einnehmen
        </Recipe> {/*Anmerkung ist childrenProperty, siehe Recipe.js*/}
        <Recipe
            name={this.state.recipes[2].name}
            pieces={this.state.recipes[2].pieces}
        />
      </div>
    );
  }
}

export default App;
