import React, { Component } from 'react';
import '../design/RecipeStyle.css';
import axios from 'axios';

class Require extends Component {

  constructor(props){
    super(props);

    this.state={
      docID: props.docID,
      id: props.id,
      verNumber: props.verNumber,
      password: props.password,
      complaint: props.complaint,
      medicine: props.medicine,
      btnText: "Rezept ausstellen",
      isReleased: false
    }

      this.releaseRecipe = this.releaseRecipe.bind(this);
  }

  releaseRecipe(){
    //Rezept wurde noch nicht ausgestellt
    console.log(this.state.isReleased);

    if(!this.state.isReleased){
      console.log("Rezept ausstellen mit der verNumber: " + this.state.verNumber);

      //send RecipeData to API, to insert in to database
      axios.post('http://localhost/API_Data/releaseRecipe.php', {
          verNumber: this.state.verNumber,
          neededMedicine: this.state.medicine,
          userID: this.state.docID
            //später wird hier das Medikament aus der Anforderung übergeben
        })
        .then(response => {
          console.log("Response: " + response.data);
        });

      this.setState({ isReleased: true,
                      btnText: "Bearbeitet"});

    }else{
      console.log("Rezept wurde bereits ausgestellt");
    }

  }


  render() {
    console.log(this.state.isReleased);
    return(
       <div className="Recipe">
          <p>"Patient mit Versichertennummer {this.state.verNumber} hat {this.state.complaint} und benötigt ein Rezept für {this.state.medicine}"</p> {/*Parargraoh ist clickcable, props.click ruft Methode auf die in App.js übergeben wurde*/}
          <p>{this.state.children}</p>  {/*zeigt die Anmerkung:... an*/}

          <button id="btn_ReleaseRequire" onClick={this.releaseRecipe} disabled={this.state.isReleased}>
              {this.state.btnText} {/*set Button text*/}
          </button>
       </div>

    );
  }
}

export default Require;
