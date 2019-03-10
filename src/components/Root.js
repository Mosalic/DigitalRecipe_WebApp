import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ContentHandler from './ContentHandler';
import Login from './Login';
import Home from './Home';


class Root extends Component {

  render() {

      return (

        <div>
          <Router>

            <div>
              <hr />
              {/*define routes*/}
              <Route exact path="/" component={ContentHandler} />
              <Route path="/login" component={Login}/>
              <Route exact path="/home/:id" component={Home}/>
              <Switch>
                <Route path='/home/:id/:location' component={Home} /> {/*location: require, profile or recipe*/}
              </Switch>
            </div>
            
          </Router>
        </div>

      );
  }
}

export default Root;
