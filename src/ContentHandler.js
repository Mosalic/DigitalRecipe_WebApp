import React, { Component } from 'react';
import Recipe from './Recipe'; //own Component
import Header from './Header';

class ContentHandler extends Component {

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
    //a different way to style your code, instead of css-file, attentionn: in javascript so "css-code" is a bit different
    const styleBtn ={
      backgroundColor: 'rose',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    // can just return 1 div
    return (
      <div className="ContentHandler">
        <p>This is working</p>
        <button
            style={styleBtn}
            onClick={this.switchNameHandler.bind(this, 'Aspirin')}>Switch Name {/*Hier wird der name in Apsirin geändert*/}
        </button>
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

export default ContentHandler;
