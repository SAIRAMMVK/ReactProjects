import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './home';
import Skills from './skill';
import Footer from './footer';
import fblink from './images/facebook.jpg';
import gitlink from './images/github.png';
class App extends Component {
  render() {
    return (
      <Router>
            <div>
               <h2>Welcome to My Website</h2>
               <span>
                  <Link id="one" to={'/'}>Home</Link>
                  <Link id="two"  to={'/Skills'}>Skills</Link>
                </span>
                <hr/>
               
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/Skills' component={Skills} />
               </Switch>
               <Footer/>
            </div>
         </Router>
         
    );
  }
}

export default App;
