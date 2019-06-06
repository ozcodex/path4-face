import React, { Component } from 'react';
import { Container,Col,Row } from 'react-bootstrap';
import Members from './Members.jsx'

class About extends Component {
  render() {
    return (
      <div>
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
