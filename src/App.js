import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Intro from './components/Intro.jsx';
import './App.css';
import './Logo.css';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/about'} className="nav-link">About</Link></li>
              <li><Link to={'/intro'} className="nav-link">Intro</Link></li>
            </ul>
          </nav>
        </div>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/Intro' component = {Intro}/>
          </Switch>
      </Router>
    );
  }
}

export default App;
