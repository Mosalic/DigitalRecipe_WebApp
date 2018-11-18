import React, { Component } from 'react';
//import RecipeHandler from './RecipeHandler'; //own Component
import Recipe from './Recipe';
import axios from 'axios';

class Profile extends Component {


  render() {
    // can just return 1 div
    return (
      <div className="ContentHandler">
        <h1 className="contentTitle">Profil</h1>
      </div>
    );
  }
}

export default Profile;
