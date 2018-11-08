import React, { Component } from 'react';
import './App.css'; //import stylesheets
import ContentHandler from './ContentHandler'; //own Component
import Header from './Header';


class App extends Component {



  render() {

      // can just return 1 div
      return (
        <div className="App">
          <Header/>
          <ContentHandler />

        </div>
      );


  }
}

export default App;
