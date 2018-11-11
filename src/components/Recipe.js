import React from 'react';
import '../design/RecipeStyle.css';

const recipe = (props) => {

    return(
       <div className="Recipe">
          <p>"I am a {props.name}-Recipe with the id {props.id} and my password is {props.password}"</p> {/*Parargraoh ist clickcable, props.click ruft Methode auf die in App.js übergeben wurde*/}
          <p>{props.children}</p>  {/*zeigt die Anmerkung:... an*/}
          <input type="text" onChange={props.changed}/>
          <button onClick={console.log("Rezept ausstellen")}>
              Rezept ausstellen
          </button>
       </div>

    )
};

export default recipe;
