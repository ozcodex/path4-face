import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Intro from './components/Intro.jsx';
import Vision from './components/Vision.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar collapseOnSelect expand="md">
          <Navbar.Brand as={Link} to="/" >Path4</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/" >Home</Nav.Link>
              <Nav.Link as={Link} to="/intro" >Intro</Nav.Link>
              <Nav.Link as={Link} to="/about" >About</Nav.Link>
              <Nav.Link as={Link} to="/vision" >Vision</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className='content py-5'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/intro' component = {Intro}/>
            <Route path='/vision' component = {Vision}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
