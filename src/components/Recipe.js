import React, { Component } from 'react';
import '../design/RecipeStyle.css';
import axios from 'axios';

class Recipe extends Component {

  constructor(props){
    super(props);

    this.state={
      id: props.id,
      username: props.name,
      password: props.password,
      isReleased: false
    }

      this.releaseRecipe = this.releaseRecipe.bind(this);
  }

  releaseRecipe(){
    //Rezept wurde noch nicht ausgestellt
    if(!this.state.isReleased){
      console.log("Rezept ausstellen mit der id: " + this.state.id);

      //send RecipeData to API, to insert in to database
      axios.post('http://localhost/API_Data/releaseRecipe.php', {
          userName: this.state.username,
          neededMedicine: this.state.password  //später wird hier das Medikament aus der Anforderung übergeben
        })
        .then(response => {
          console.log("Response: " + response.data);
        });

      this.setState({isReleased: true});
    }else{
      console.log("Rezept wurde bereits ausgestellt");
    }

  }

  render() {

    return(
       <div className="Recipe">
          <p>"I am a {this.state.username}-Recipe with the id {this.state.id} and my password is {this.state.password}"</p> {/*Parargraoh ist clickcable, props.click ruft Methode auf die in App.js übergeben wurde*/}
          <p>{this.state.children}</p>  {/*zeigt die Anmerkung:... an*/}

          <button onClick={this.releaseRecipe}>
              Rezept ausstellen
          </button>
       </div>

    );
  }
}

export default Recipe;
