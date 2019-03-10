import React, { Component } from 'react';
import '../design/App.css'; //import stylesheets
import {Redirect} from 'react-router-dom';


class Logout extends Component {

  constructor(){
    super();
    this.state = {
        userID: '',
        isLoggedIn: true
    };
  }

  checkLogout(){
    console.log("Ausloggen");
    this.setState({isLoggedIn: false});
  }

  render() {

    if(this.state.isLoggedIn === false){
      return <Redirect to='/login'/>
    }
    
      return (
          <div>
             <button onClick={this.checkLogout = this.checkLogout.bind(this)}>
                 Logout
             </button>
          </div>

      );
  }
}


export default Logout;
