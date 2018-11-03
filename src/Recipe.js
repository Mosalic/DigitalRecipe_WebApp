import React from 'react';

const recipe = (props) => {
    return(
       <div>
          <p onClick={props.click}>"I am a {props.name}-Recipe with {props.pieces} pieces"</p> {/*Parargraoh ist clickcable, props.click ruft Methode auf die in App.js übergeben wurde*/}
          <p>{props.children}</p>  {/*zeigt die Anmerkung:... an*/}
       </div>

    )
};

export default recipe;
