import React, { Component } from 'react';
import Header from './Header';
import '../design/RecipeStyle.css';
import Require from './Require';
import {NavLink, Route} from 'react-router-dom';

class Home extends Component {

  render() {
    // can just return 1 div
    return (
      <div >
          <div>
              <Header />
              <ul>
                  <li><NavLink to='/home/require' activeStyle={{color:'green'}}>Anforderungen</NavLink></li>
                  <li><NavLink to='/home/profile' activeStyle={{color:'green'}}>Profil</NavLink></li>
                  <li><NavLink to='/home/recipe' activeStyle={{color:'green'}}>Rezepte</NavLink></li>
              </ul>

          </div>
          <div>
              <h3>Home</h3>
              <p>User ID:</p> {/*soll Parameter ausgeben, der über den Link/Route übergeben wird*/}
              {this.props.children} {/*shows the Child-Component, when you insert a Child-Component to this Component*/}
          </div>
      </div>
    );
  }
}

export default Home;
