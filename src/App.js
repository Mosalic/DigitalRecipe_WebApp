import React, { Component } from 'react';
import './design/App.css'; //import stylesheets
import Root from './components/Root';


class App extends Component {

  render() {
      // can just return 1 div
      return (
        <div className="App">
            <Root /> {/*Component where insert Routing*/}
        </div>
      );
  }
}

export default App;
