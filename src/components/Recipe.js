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

  //delete Recipe is not implemented yet
  deleteRecipe(){
    if(!this.state.isDeleted){
      console.log("Recipe deleteRecipe, noch kein Zugriff auf Datenbank");
      this.setState({ isDeleted: true,
                      btnText: "noch nicht möglich"});
    }
  }

  render() {

    return(
       <div className="Recipe">
          <p><b>Rezept für ...</b> </p>
          <p>Patienten: {this.state.patFirstName + " " + this.state.patLastName}</p>
          <p>Versichertennummer: {this.state.verNumber}</p>
          <p>verschriebenes Medikament: {this.state.medicine}</p>
          <p>Menge/Form: {this.state.medPortion + " / " + this.state.medForm}</p>

          <p>{this.state.children}</p>

          <button onClick={this.deleteRecipe} disabled={this.state.isDeleted}>
              {this.state.btnText}
          </button>
       </div>

    );
  }
}

export default Recipe;
