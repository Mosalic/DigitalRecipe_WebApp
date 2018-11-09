import React, { Component } from 'react';
import './App.css'; //import stylesheets
import ContentHandler from './ContentHandler'; //own Component
import Login from './Login';
import Header from './Header';


class App extends Component {

  render() {
      // can just return 1 div
      return (
        <div className="App">

          <div className="App_Aside">
              <Header/>
              <p className="App_Info">Registriere dich und Logge dich ein, um bei deinem Arzt dein Rezept ganz bequem von zu Hause
                aus anzufordern. Dein Arzt überprüft die Angaben wie gewohnt und stellt dir dein Rezept aus.
                Das Rezept kannst du auf deinem Smartphone über die App einsehen.
              </p>
          </div>
          <div className="App_Form">
            {/*<ContentHandler />*/}
            <Login/>
          </div>

        </div>
      );
  }
}

export default App;
