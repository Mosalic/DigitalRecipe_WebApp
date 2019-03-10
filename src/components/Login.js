import React, { Component } from 'react';
import '../design/App.css';
import Header from './Header';
import {Redirect, withRouter} from 'react-router-dom';
import axios from 'axios';


class Login extends Component {

constructor(props){
  super(props);
  this.state = {
    username:'',
    password:'',
    userID: '',
    isTiping: false,
    isLoggedIn:false,
    response: ''
  };

  //necessary to make this work in callback
  this.registerUser = this.registerUser.bind(this);
  this.checkLogin = this.checkLogin.bind(this);
  this.handleChange = this.handleChange.bind(this);
}

registerUser(){
  console.log("Registrieren");
  //Inputs send to API, to insert in to database
  axios.post('http://localhost/API_Data/registerUser.php', {
      userRole: 'Aerzte',
      userName: this.state.username,
      userPassword: this.state.password,
    })
    .then(response => {
      console.log("Login registerUser: " +response.data);
    });
}

//check if inserts are correct and the user can login
checkLogin(){
  //Inputs send to API, to insert in to database
  axios.post('http://localhost/API_Data/login.php', {
      userRole: 'Aerzte',  //define user for API
      userName: this.state.username,
      userPassword: this.state.password,
    })
    .then(response => {
      this.setState({response: response.data});
      //response should be docID
      if(this.state.response !== " Angaben bitte überprüfen"){
          if(this.state.response[0].isUser == true){
            console.log("isUser: " +  this.state.response[0].isUser);
            this.setState({userID: this.state.response[0].id});
            this.setState({isLoggedIn: true});
          }
      }else{
        console.log("Login checkLogin: " + this.state.response); //incorrect inserts
      }

    });

}

handleChange(event){
  //change state during user inserts
  this.setState({[event.target.name]: event.target.value});
}

  render() {
    {/*user is logged in*/}
    if(this.state.isLoggedIn === true){
      console.log("Login render: " + this.state.userID);
      return <Redirect to={`/home/${this.state.userID}/require`}/>
    }
      return (
        <div>
          <div className="App">

              <div className="App_Aside">
                  <Header/>
                  <p className="App_Info">Das Digitale Rezept ersetzt das Rezept in Papierform.
                  Registriere dich und bearbeite die Anforderungen deiner Patienten. Über eine Bearbeitungsmaske
                  kann du das Digitale Rezept ausstellen und dem Patienten zur Verfügung stellen.
                  </p>
              </div>

              <div className="App_Form_Login">
                <div id="login_form">
                    <h1>Login</h1>

                  <div id="login_submit">
                        <div id="login_input">

                            <div>
                                <label> Name:</label>
                                <label> Passwort:  </label>
                            </div>
                            <div>
                              <input type="text" name="username" placeholder="Enter E-Mail or Username" value={this.state.username} onChange={(e) => this.handleChange(e)}/>
                              <input type="password" name="password" placeholder="Enter Password" value={this.state.password} onChange={(e) => this.handleChange(e)}/>
                              <br/>
                            </div>

                        </div>
                        <button onClick={this.checkLogin}>Login</button>
                        <button onClick={this.registerUser}>Registrieren</button>
                    </div>

                  </div>

              </div>

          </div>
        </div>
      );
  }
}

export default withRouter(Login);
