import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Members from './Members.jsx'

class About extends Component {
  render() {
    return (
      <div>
        <Container>
          <Members /> 
        </Container>
      </div>
    );
  }
}

export default About;
