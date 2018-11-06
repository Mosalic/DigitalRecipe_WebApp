import React, { Component } from 'react';
import RecipeHandler from './RecipeHandler'; //own Component
//import axios from 'axios';


class ContentHandler extends Component {

  state = {
    otherState:'Different Content for Login, Register, Requieres and Recipes'
  }

 /*fetchUsers() {
   console.log("Get data");
    // Where we're fetching data from
    fetch(`http://192.168.0.104/API_Data/testgetusers.php`)
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the users state
      .then(data =>
        this.setState({
          otherState: data
        })
      )
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));
  }*/


  /*componentDidMount(){
    axios.get('http://localhost/API_Data/testgetusers.php')
    .then((response) => {
      this.setState({
        otherState: response.data
      });
    })
    .catch((error) => {
      console.log('error', error);
    })
  }*/


  render() {
    // can just return 1 div
    return (
      <div className="ContentHandler">
        <p>{this.state.otherState}</p>

        <RecipeHandler />
        <button onClick={this.fetchUsers}>Data</button>
      </div>
    );
  }
}

export default ContentHandler;
