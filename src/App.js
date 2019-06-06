import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Intro from './components/Intro.jsx';
import Vision from './components/Vision.jsx';
import './App.css';
import logo from './assets/logo.png'

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar collapseOnSelect expand="md" className="p-3">
          <Navbar.Brand as={Link} to="/" className='p-2' >
            <img src={logo} className='logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='p-2'/>
          <Navbar.Collapse>
            <Nav className="ml-auto">
              <NavItem href='/'>
                <Nav.Link as={Link} to="/" eventKey="home" className='p-2'>Home</Nav.Link>
              </NavItem>
              <NavItem href='/intro'>
                <Nav.Link as={Link} to="/intro" eventKey="intro" className='p-2'>Intro</Nav.Link>
              </NavItem>
              <NavItem href='/about'>
                <Nav.Link as={Link} to="/about" eventKey="about" className='p-2'>About</Nav.Link>
              </NavItem>
              <NavItem href='/about'>
                <Nav.Link as={Link} to="/vision" eventKey="vision" className='p-2'>Vision</Nav.Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className='p-4'></div>
        <div id='space' className='p-3'></div>
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
