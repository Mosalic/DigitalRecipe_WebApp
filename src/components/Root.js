import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
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
              <ul>
                  <li><NavLink to='/' exact activeStyle={{color:'green'}}>Conent</NavLink></li> {/*exact verhindert, dass Parent-NavLink auch als activ gekennzeichnet wird*/}
                  <li><NavLink to='/home' activeStyle={{color:'green'}}>Home</NavLink></li>
                  <li><NavLink to='/login' activeStyle={{color:'green'}}>Login</NavLink></li>
              </ul>

              <hr />

              <Route exact path="/" component={ContentHandler} /> {/*mit exact wird ContentHandler nicht bei den anderen Link gerendert*/}
              <Route path="/home" component={Home}/>
              <Route path="/login" component={Login}/>
              <Route path='/home/require' component={Require} />
              <Route path='/home/profile' component={Require} />
              <Route path='/home/recipe' component={Require} />

            </div>
          </Router>


          {/*<ContentHandler>
              <Home>
                  <Require>
                  </Require>
              </Home>
              <Login />

              <ul>
                  <li><a href="">Home</a></li>
                  <li><a href="">Login</a></li>
              </ul>
          </ContentHandler>*/}
        </div>

      );
  }
}

export default Root;
