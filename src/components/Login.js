import React, { Component } from 'react';
import '../design/App.css'; //import stylesheets
import Header from './Header';
import {/*NavLink,*/ Redirect, withRouter} from 'react-router-dom';
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
      userRole: 'Aerzte',  //gibt Datenbank an in der nach User gesucht wird, web benutzen nur ärzte
      userName: this.state.username,
      userPassword: this.state.password,
    })
    .then(response => {
      console.log("Login registerUser: " +response.data);
    });
}

//check if inserts are correct and the user can login
checkLogin(){
  console.log("Button Login: " + this.state.username + ", " + this.state.password);
  //inputs zusammenfassen für Parameterübergabe
  //Inputs send to API, to insert in to database
  axios.post('http://localhost/API_Data/login.php', {
      userRole: 'Aerzte',  //gibt Datenbank an in der nach User gesucht wird, web benutzen nur ärzte
      userName: this.state.username,
      userPassword: this.state.password,
    })
    .then(response => {
      this.setState({response: response.data});
      //in response kommt unter anderem userID kommt zurück, wichtig für weitere Werte/Abfragen
      //console.log("Login checkLogin: " + JSON.stringify(this.state.response));
      if(this.state.response !== " Angaben bitte überprüfen"){
          if(this.state.response[0].isUser == true){
            console.log("isUser: " +  this.state.response[0].isUser); //isUSer und id in login.php festgelegt
            this.setState({userID: this.state.response[0].id});
            this.setState({isLoggedIn: true}); //mit Click auf Button und einer ID als Antwort wird der User als eingeloggt eingestuft
          }
      }else{
        console.log("Login checkLogin: " + this.state.response); //Angaben stimmen nicht für Login, Rückmeldung für den User
      }

    });

  //this.props.history.push("/home"); //hierfür withRouter importieren und die Komponente mit withRouter(ComponentName) exportieren

}

handleChange(event){
  //setzt während dem Tippen die Variablen/States
  //console.log("Change input: " + event.target.value); //zum testen
  this.setState({[event.target.name]: event.target.value});
}


  render() {
    {/*ist der user eingeloggt wird er zur Home-Seite verlinkt*/}
    {/*${this.state.userID}*/}
    if(this.state.isLoggedIn === true){
      console.log("Login render: " + this.state.userID);
      return <Redirect to={`/home/${this.state.userID}/require`}/>
    }
      return (
        <div>
          <div className="App">

              <div className="App_Aside">
                  <Header/>
                  <p className="App_Info">Registriere dich und Logge dich ein, um bei deinem Arzt dein Rezept ganz bequem von zu Hause
                    aus anzufordern. Dein Arzt überprüft die Angaben wie gewohnt und stellt dir dein Rezept aus.
                    Das Rezept kannst du auf deinem Smartphone über die App einsehen.
                  </p>

                  {/*<ul>
                      <li><NavLink to='/' exact activeStyle={{color:'green'}}>Conent</NavLink></li>
                      <li><NavLink to='/home' activeStyle={{color:'green'}}>Home</NavLink></li>
                      <li><NavLink to='/login' activeStyle={{color:'green'}}>Login</NavLink></li>
                  </ul>*/}
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
