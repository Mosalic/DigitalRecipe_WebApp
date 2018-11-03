import React from 'react';

const recipe = (props) => {
    return(
       <div>
          <p onClick={props.click}>"I am a {props.name}-Recipe with {props.pieces} pieces"</p> {/*Parargraoh ist clickcable, props.click ruft Methode auf die in App.js übergeben wurde*/}
          <p>{props.children}</p>  {/*zeigt die Anmerkung:... an*/}
          <input type="text" onChange={props.changed}/>
       </div>

    )
};

export default recipe;
