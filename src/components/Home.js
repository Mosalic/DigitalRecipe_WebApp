import React, { Component } from 'react';
import Header from './Header';
import '../design/RecipeStyle.css';
import Logout from './Logout';
import RequireList from './RequireList';
import RecipeList from './RecipeList';
import Profile from './Profile';
import {NavLink, Redirect} from 'react-router-dom';

class Home extends Component {

  constructor(props){
    super(props);

    this.state = {
      userID: '',
      isLoggedIn: false
    };
  }

  componentDidMount(){
    console.log("Home did Mount Params: " + this.props.match.params.id);
    this.setState({userID: this.props.match.params.id});
  }

  render() {
    // can just return 1 div
    return (

      <div>
        {/*when user is logged in*/}
        <div className="App">

            <div className="App_Aside">
                <Header/>
                <div className="menu">
                  <ul>
                      <li><NavLink className="menuLink" activeClassName="active" to={`/home/${this.state.userID}/require`} >Anforderungen</NavLink></li>
                      <li><NavLink className="menuLink" activeClassName="active" to={`/home/${this.state.userID}/recipe`} >Rezepte</NavLink></li>
                      <li><NavLink className="menuLink" activeClassName="active" to={`/home/${this.state.userID}/profile`} >Profil</NavLink></li>
                  </ul>
                </div>
                <div className="logout">
                  <Logout />
                </div>
            </div>


            <div className="App_Form">

                <div id="contentHome">
                  {/*home can show different components*/}
                  { (this.state.userID !== "") ?
                      (
                        (this.props.match.params.location === "require") ? (<RequireList userID={this.state.userID}/>)
                        : (this.props.match.params.location === "recipe") ? (<RecipeList userID={this.state.userID}/>)
                        : (this.props.match.params.location === "profile") ? (<Profile userID={this.state.userID}/>)
                        : "Path existiert nicht"
                      )
                    : "Willkommen"
                  }
                  {this.props.children}
                </div>


            </div>


        </div>
      </div>
    );
  }
}



export default Home;
