import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import '../design/App.css'; //import stylesheets
//import RecipeHandler from './RecipeHandler'; //own Component

class ContentHandler extends Component {


  render() {

    // can just return 1 div
    return (
      <div className="ContentHandler">
        <h1>ContentHandler</h1>

        <Redirect to='/login' />
      </div>
    );
  }
}

export default ContentHandler;
