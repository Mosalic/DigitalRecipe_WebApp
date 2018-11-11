import React, { Component } from 'react';
//import RecipeHandler from './RecipeHandler'; //own Component
import Login from './Login';
import Home from './Home';




class ContentHandler extends Component {

  render() {
    // can just return 1 div
    return (
      <div className="ContentHandler">
      <h1>ContentHandler</h1>
          <div>
              {/*shows the Child-Component, when you insert a Child-Component to this Component*/}

          </div>
      </div>
    );
  }
}

export default ContentHandler;
