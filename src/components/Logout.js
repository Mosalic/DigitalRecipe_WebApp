import React, { Component } from 'react';
import '../design/App.css'; //import stylesheets

class Logout extends Component {
  checkLogout(){
    console.log("Ausloggen");
  }

  render() {
      // can just return 1 div
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
