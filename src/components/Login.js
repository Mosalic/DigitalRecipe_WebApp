import React, { Component } from 'react';
import '../design/App.css'; //import stylesheets
import Header from './Header';
import {Link, Redirect, withRouter} from 'react-router-dom';
//import History from './OwnBrowserRouter';


class Login extends Component {

constructor(props){
  super(props);
  this.state = {
    username:'',
    password:'',
    isTiping: false,
    isLoggedIn:false
  };

  //necessary to make this work in callback
  this.checkLogin = this.checkLogin.bind(this);
  this.handleChange = this.handleChange.bind(this);
}

//check if inserts are correct and the user can login
checkLogin(){
  console.log("Button");
  this.setState({isLoggedIn: true}); //mit Click auf Button wird der User als eingeloggt eingestuft
  //this.props.history.push("/home"); //hierfür withRouter importieren und die Komponente mit withRouter(ComponentName) exportieren

}

handleChange(event){
  //setzt während dem Tippen die Variablen/States
  /*if(event.target.type === "text" && this.state.isTiping){
    this.setState({
      username: event.target.value
    });
    console.log('User: ' + this.state.username);
  }else if(event.target.type === "password" && this.state.isTiping){
    this.setState({
      password: event.target.value
    });
    console.log('Password: ' + this.state.password);
  }else{
    this.setState({
      isTiping: true
    });
  }*/
  //name von den inputs sind die selben wie die variablen/States
  //wird ein passwort eingetippt, wird das passwort gesetzt
  this.setState({[event.target.name]: event.target.value});
  console.log(this.state);

}
  render() {
    {/*ist der user eingeloggt wird er zur Home-Seite verlinkt*/}
    if(this.state.isLoggedIn === true){
      return <Redirect to='/home' />
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
              </div>

              <div className="App_Form">
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
                  </div>

                </div>
              </div>

          </div>
        </div>
      );
  }
}

export default withRouter(Login);
