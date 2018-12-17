import React, { Component } from 'react';
import '../design/RecipeStyle.css';
import axios from 'axios';

class Require extends Component {

  constructor(props){
    super(props);

    this.state={
      docID: props.docID,
      id: props.id,
      patLastName: props.patLastName,
      patFirstName: props.patFirstName,
      verNumber: props.verNumber,
      password: props.password,
      complaint: props.complaint,
      medicine: props.medicine,
      recipeFK: props.recipeFK,
      btnText: "Rezept ausstellen",
      statusReleased: props.statusReleased,
      isReleased: false
    }

      this.releaseRecipe = this.releaseRecipe.bind(this);
  }

  componentDidMount(){
    console.log("Require didMount: " + this.state.isReleased);
    if(this.state.recipeFK != null){
      console.log("zugelassen wert: " + this.state.statusReleased);
      // test = JSON.parse(this.state.statusReleased);
      this.setState({ isReleased: JSON.parse(this.state.statusReleased),
                      btnText: "Bearbeitet"});
    }

  }

  releaseRecipe(){
    //Rezept wurde noch nicht ausgestellt
    console.log(this.state.isReleased);

    if(!this.state.isReleased){
      console.log("Rezept ausstellen mit der verNumber: " + this.state.verNumber);

      //send RecipeData to API, to insert in to database
      axios.post('http://localhost/API_Data/releaseRecipe.php', {
          verNumber: this.state.verNumber,
          requireID: this.state.id, //Rezept bekommt gleiche id wie die ugehörige Anforderung
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
      console.log("Fehler oder Rezept wurde bereits ausgestellt");
    }

  }


  render() {

    return(
       <div className="Recipe">
          <p><b>Anforderung von ...</b> </p>
          <p>Patient: {this.state.patFirstName + " " + this.state.patLastName}</p> {/*Parargraoh ist clickcable, props.click ruft Methode auf die in App.js übergeben wurde*/}
          <p>Versichertennummer: {this.state.verNumber}</p>
          <p>Mit der Beschwerde: {this.state.complaint}</p>
          <p>benötigt ein Rezept für: {this.state.medicine}</p>
          <p>{this.state.children}</p>  {/*zeigt die Anmerkung:... an*/}

          <button id="btn_ReleaseRequire" onClick={this.releaseRecipe} disabled={this.state.isReleased}>
              {this.state.btnText} {/*set Button text*/}
          </button>
       </div>

    );
  }
}

export default Require;
