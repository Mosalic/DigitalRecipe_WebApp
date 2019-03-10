import React, { Component } from 'react';
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
    //Api request
    axios.post('http://localhost/API_Data/getRecipes.php',  {
        userRole: 'Aerzte',
        userID: this.state.userID
      })
    .then((response) => {
        if(response.data === "Keine Angaben enthalten"){
          console.log("RecipeList didMount: " + JSON.stringify(this.state.recipes));
        }else{
          this.setState({recipes: response.data});
          //console.log("RecipeList didMount: " + JSON.stringify(this.state.recipes));
        }
    })
    .catch((error) => {
      console.log('error', error);
    })

  }


  render() {

    return (
      <div className="ContentHandler">
        <h1 className="contentTitle">Ausgestellte Rezepte</h1>
        {/*set data for each element/recipe*/}
        { (this.state.recipes !== "" && this.state.recipes !== "Keine Angaben enthalten") ?
            (
              this.state.recipes.map(recipe =>
                <Recipe key = {recipe.id}
                  patLastName={recipe.pat_lastName}
                  patFirstName={recipe.pat_firstName}
                  medicine={recipe.med_name}
                  med_portion={recipe.med_menge}
                  med_form={recipe.med_form}
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
