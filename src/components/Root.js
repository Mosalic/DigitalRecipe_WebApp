import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ContentHandler from './ContentHandler';
import Login from './Login';
import Home from './Home';
import Require from './Require';



class Root extends Component {

  render() {
      // can just return 1 div
      return (

        <div>

          <Router>
            {/*Router darf nur ein Child enthalten*/}
            <div>

              <hr />
              {/*Routen definieren*/}
              <Route exact path="/" component={ContentHandler} /> {/*mit exact wird ContentHandler nicht bei den anderen Link gerendert*/}
              <Route path="/home/:id" component={Home}/>
              <Route path="/login" component={Login}/>
              <Switch>
                <Route path='/home/:id/require' component={Require} />
                <Route path='/home/:id/profile' component={Require} />
                <Route path='/home/:id/recipe' component={Require} />
              </Switch>

            </div>
          </Router>

        </div>

      );
  }
}

export default Root;
