import React from 'react';

const recipe = (props) => {
    return(
       <div>
          <p>"I am a {props.name}-Recipe with {props.pieces} pieces"</p>
          <p>{props.children}</p>  {/*zeigt die Anmerkung:... an*/}
       </div>

    )
};

export default recipe;
