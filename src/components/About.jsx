import React, { Component } from 'react';
import { Container,Col,Row } from 'react-bootstrap';
import Members from './Members.jsx'
import Background from './Background.jsx'

class About extends Component {
  render() {
    return (
      <div>
        <Background />
        <Container>
          <Row>
            <Col className="p-3">
            </Col>
          </Row>
          <Members /> 
        </Container>
      </div>
    );
  }
}

export default About;
