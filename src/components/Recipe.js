import React, { Component } from 'react';
import '../design/RecipeStyle.css';
import axios from 'axios';

class Recipe extends Component {

  constructor(props){
    super(props);

    this.state={
      id: props.id,
      patLastName: props.patLastName,
      patFirstName: props.patFirstName,
      verNumber: props.verNumber,
      doc: props.doctor,
      medicine: props.medicine,
      medPortion: props.med_portion,
      medForm: props.med_form,
      btnText: "Rezept löschen",
      isDeleted: false
    }

      this.deleteRecipe = this.deleteRecipe.bind(this);
  }

  deleteRecipe(){
    if(!this.state.isDeleted){
      console.log("Recipe deleteRecipe, noch kein Zugriff auf Datenbank");
      this.setState({ isDeleted: true,
                      btnText: "Gelöscht"});
    }
    //Rezept wurde noch nicht ausgestellt
    /*if(!this.state.isReleased){
      console.log("Rezept löschen mit der verNumber: " + this.state.verNumber);

      //send RecipeData to API, to insert in to database
      axios.post('http://localhost/API_Data/releaseRecipe.php', {
          verNumber: this.state.verNumber,
          neededMedicine: this.state.medicine  //später wird hier das Medikament aus der Anforderung übergeben
        })
        .then(response => {
          console.log("Response: " + response.data);
        });

      this.setState({isReleased: true});
    }else{
      console.log("Rezept wurde bereits ausgestellt");
    }*/

  }

  render() {

    return(
       <div className="Recipe">
          <p><b>Rezept für ...</b> </p>
          <p>Patienten: {this.state.patFirstName + " " + this.state.patLastName}</p>
          <p>Versichertennummer: {this.state.verNumber}</p>
          <p>verschriebenes Medikament: {this.state.medicine}</p>
          <p>Menge/Form: {this.state.medPortion + " / " + this.state.medForm}</p>
          {/*<p>zuständiger Arzt {this.state.doc}</p>*/} {/*Parargraoh ist clickcable, props.click ruft Methode auf die in App.js übergeben wurde*/}
          <p>{this.state.children}</p>  {/*zeigt die Anmerkung:... an*/}

          <button onClick={this.deleteRecipe} disabled={this.state.isDeleted}>
              {this.state.btnText}
          </button>
       </div>

    );
  }
}

export default Recipe;
