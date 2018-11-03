import React from 'react';
import './RecipeStyle.css';

const recipe = (props) => {

    return(
       <div className="Recipe">
          <p onClick={props.click}>"I am a {props.name}-Recipe with {props.pieces} pieces"</p> {/*Parargraoh ist clickcable, props.click ruft Methode auf die in App.js übergeben wurde*/}
          <p>{props.children}</p>  {/*zeigt die Anmerkung:... an*/}
          <input type="text" onChange={props.changed}/>
          <button onClick={console.log("Rezept ausstellen")}>
              Rezept ausstellen
          </button>
       </div>

    )
};

export default recipe;
