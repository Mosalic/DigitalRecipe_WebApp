import React, { Component } from 'react';
import RecipeHandler from './RecipeHandler'; //own Component


class ContentHandler extends Component {

  render() {

    // can just return 1 div
    return (
      <div className="ContentHandler">
        <p>This is working</p>
      
        <RecipeHandler />
      </div>
    );
  }
}

export default ContentHandler;
