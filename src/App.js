import React, { Component } from 'react';
import './App.css'; //import stylesheets
import ContentHandler from './ContentHandler'; //own Component
import Header from './Header';
import axios from 'axios';

class App extends Component {

/*componentDidMount(){
  fetch('http://localhost/API_Data/testgetusers.php')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  })
  .catch(err => console.log("FEEEHLER " + err));
}*/

componentDidMount(){
  axios.get('http://localhost/API_Data/testgetusers.php')
  .then((response) => {

      console.log(response.data);

  })
  .catch((error) => {
    console.log('error', error);
  })
}

  render() {

      // can just return 1 div
      return (
        <div className="App">
          <Header/>
          {/*<ContentHandler />*/}

        </div>
      );


  }
}

export default App;
