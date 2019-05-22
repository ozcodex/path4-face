import React, { Component } from 'react';
import { Container,Col,Row } from 'react-bootstrap';
import Background from './Background.jsx'
import Introduction from './Introduction.jsx'



class  Intro extends Component {
    render() {
      return (
        <div>
          <Background />
          <Container>
            <Row>
              <Col className="p-3">
              </Col>
              <Introduction/>
            </Row>
          </Container>
        </div>
      );
    }
  }
  
  export default Intro;