import React, { Component } from 'react';
import ContentHandler from './ContentHandler'; //own Component

class Login extends Component {

constructor(){
  super();
  this.state = {
    user:'',
    password:'',
    isTiping: false
  };

  //necessary to make this work in callback
  this.checkLogin = this.checkLogin.bind(this);
  this.handleChange = this.handleChange.bind(this);
}

checkLogin(){
  console.log("Button");
  return(<ContentHandler/>)
}

handleChange(event){

  if(event.target.type === "text" && this.state.isTiping){
    this.setState({
      user: event.target.value
    });
    console.log('User: ' + this.state.user);
  }else if(event.target.type === "password" && this.state.isTiping){
    this.setState({
      password: event.target.value
    });
    console.log('Password: ' + this.state.password);
  }else{
    this.setState({
      isTiping: true
    });
  }
}
  render() {
      return (
        <div>
          <div id="login_form">
            <h1>Login</h1>
            <div id="login_submit">
              <div id="login_input">
                <div>
                    <label> Name:</label>
                    <label> Passwort:  </label>
                </div>
                <div>
                  <input type="text"  placeholder="Enter E-Mail or Username" onChange={this.handleChange}/>
                  <input type="password" placeholder="Enter Password" onChange={this.handleChange}/>
                  <br/>
                </div>
              </div>
              <button onClick={this.checkLogin}>Login</button>
            </div>
          </div>

        </div>
      );
  }
}

export default Login;
