import React, { Component } from 'react';
import Header from './Header';
import '../design/RecipeStyle.css';
import Logout from './Logout';
import Require from './Require';
import {NavLink, Route, Redirect} from 'react-router-dom';

class Home extends Component {

  constructor(props){
    super(props);

    this.state = {
      userID: ''
    };
  }

  render() {
    // can just return 1 div
    return (
      <div>
        <div className="App">

            <div className="App_Aside">
                <Header/>
                <ul>
                    <li><NavLink to='/home/1/require' activeStyle={{color:'green'}}>Anforderungen</NavLink></li>
                    <li><NavLink to='/home/profile' activeStyle={{color:'green'}}>Profil</NavLink></li>
                    <li><NavLink to='/home/recipe' activeStyle={{color:'green'}}>Rezepte</NavLink></li>
                </ul>
                <div>
                  <Logout />
                </div>
            </div>


            <div className="App_Form">

                {/*<div>
                    <h3>Home</h3>
                    <p>User ID: {this.props.match.params.id}</p> {soll Parameter ausgeben, der über den Link/Route übergeben wird}

                </div>*/}
                <div id="content">
                  {/*<Require />*/}
                  {(this.props.match.params.location == "require") ?
                    (
                      <Require />
                    )
                    : "Path existiert nicht"
                  }
                  {this.props.children} {/*shows the Child-Component, when you insert a Child-Component to this Component*/}
                </div>


            </div>


        </div>
      </div>
    );
  }
}



export default Home;
