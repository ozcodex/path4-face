import React, { Component } from 'react';
import Members from './Members.jsx'
import Background from './Background.jsx'
import lu from '../assets/lu.jpg'; 

class About extends Component {
  render() {
    return (
      <div>
        <Background />
        <div className="container">
          <div className="row">
            <div className="col p-3">
            </div>
          </div>
          <Members /> 
        </div>
      </div>
    );
  }
}

export default About;
