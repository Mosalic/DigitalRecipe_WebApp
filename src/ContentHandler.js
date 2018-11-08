import React, { Component } from 'react';
//import RecipeHandler from './RecipeHandler'; //own Component
import Recipe from './Recipe';
import axios from 'axios';

class ContentHandler extends Component {
  state = {
    //Array
    recipes: []
  };

  componentDidMount(){
    axios.get('http://localhost/API_Data/testgetusers.php')
    .then((response) => {
        this.setState({recipes: response.data});
        console.log("ContentHandler: " + JSON.stringify(this.state.recipes));

    })
    .catch((error) => {
      console.log('error', error);
    })
  }

  render() {
    // can just return 1 div
    return (
      <div className="ContentHandler">
        <button onClick={this.fetchUsers}>Data</button>
        {/*<ul>{this.state.recipes.map(recipe => <li key ={recipe.id}>{recipe.name}</li>)}</ul>*/}
        {this.state.recipes.map(recipe =>
          <Recipe key = {recipe.id}
            name={recipe.name}
            id={recipe.id}
            password={recipe.password}>
            Und ich will Medizin!!!
          </Recipe>
        )}

      </div>
    );
  }
}

export default ContentHandler;
