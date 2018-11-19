import React, { Component } from 'react';
//import RecipeHandler from './RecipeHandler'; //own Component
import Recipe from './Recipe';
import axios from 'axios';

class Require extends Component {

  constructor(props){
    super(props);
    this.state = {
        userID: props.userID,
        //Array
        requires: []
    };
  }

  componentDidMount(){
    console.log("RequireList didMount: " + this.state.userID);

    axios.post('http://localhost/API_Data/getRequires.php',  {
        userID: this.state.userID
      })
    .then((response) => {
        this.setState({requires: response.data});
        console.log("RequireList didMount: " + JSON.stringify(this.state.requires));

    })
    .catch((error) => {
      console.log('error', error);
    })

  }

  render() {
    // can just return 1 div
    return (
      <div className="ContentHandler">
        <h1 className="contentTitle">Anforderungen</h1>

        {this.state.requires.map(require =>
          <Recipe key = {require.id}
            verNumber={require.ver_nummer}
            id={require.id}
            medicine={require.med_name}
            complaint={require.beschwerden}/>

        )}

      </div>
    );
  }
}

export default Require;
