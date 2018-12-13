import React, { Component } from 'react';
//import RecipeHandler from './RecipeHandler'; //own Component
import Recipe from './Recipe';
import axios from 'axios';

class RecipeList extends Component {
  constructor(props){
    super(props);
    this.state = {
        userID: props.userID,
        //Array
        recipes: []
    };
  }

  componentDidMount(){
    console.log("RecipeList didMount: " + this.state.userID);

    axios.post('http://localhost/API_Data/getRecipes.php',  {
        userRole: 'Aerzte',
        userID: this.state.userID
      })
    .then((response) => {
        if(response.date == "Keine Angaben enthalten"){
          console.log("RecipeList didMount: " + JSON.stringify(this.state.recipes));
        }else{
          this.setState({recipes: response.data});
          console.log("RecipeList didMount: " + JSON.stringify(this.state.recipes));
        }


    })
    .catch((error) => {
      console.log('error', error);
    })

  }


  render() {
    // can just return 1 div
    return (
      <div className="ContentHandler">
        <h1 className="contentTitle">Ausgestellte Rezepte</h1>

        { (this.state.recipes !== "" && this.state.recipes !== "Keine Angaben enthalten") ?
            (
              this.state.recipes.map(recipe =>
                <Recipe key = {recipe.id}
                  medicine={recipe.med_name}
                  id={recipe.id}
                  verNumber={recipe.ver_nummer}
                  doctor={recipe.LANR_fk} />
              )
            )
          : "Keine Angaben"
        }

      </div>
    );
  }
}

export default RecipeList;
