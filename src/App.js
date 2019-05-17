// import React from 'react';
// import './App.css';
// import Background from './Background.jsx'
// import Banner from './Banner.jsx'

// function App() {
//   return (
//     <div className="App">
//       <Background />
//       <header className="App-header">
//         <Banner />
//       </header>
//     </div>
//   );
// }

// export default App;


// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Nav,Navbar,Form,FormControl,Button}from 'react-bootstrap';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact'
class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <h2>Welcome to Path4</h2>
          <Nav fill variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>;
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            {/* <li><Link to={'/contact'} className="nav-link">Contact</Link></li> */}
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
