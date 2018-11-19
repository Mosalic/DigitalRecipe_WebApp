import React, { Component } from 'react';
import '../design/RecipeStyle.css';
import axios from 'axios';

class Recipe extends Component {

  constructor(props){
    super(props);

    this.state={
      id: props.id,
      verNumber: props.verNumber,
      doc: props.doctor,
      medicine: props.medicine,
      //isReleased: false
    }

      this.deleteRecipe = this.deleteRecipe.bind(this);
  }

  deleteRecipe(){
    console.log("Recipe deleteRecipe")
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
          <p>"Rezept für den Patienten mit Versichertennummer {this.state.verNumber}
              mit dem Medikament {this.state.medicine} wurde vom zuständigen Arzt
              mit der Nummer {this.state.doc} verschrieben"</p> {/*Parargraoh ist clickcable, props.click ruft Methode auf die in App.js übergeben wurde*/}
          <p>{this.state.children}</p>  {/*zeigt die Anmerkung:... an*/}

          <button onClick={this.deleteRecipe}>
              Rezept löschen
          </button>
       </div>

    );
  }
}

export default Recipe;
