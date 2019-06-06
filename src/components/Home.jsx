
import React, { Component } from 'react';
import { Container,Col,Row } from 'react-bootstrap';
import Banner from './Banner.jsx'

class Home extends Component {
  render() {
    return (
        <div>
          <Container>
            <Row>
              <Col className="p-2">
              </Col>
            </Row>
            <Banner />
          </Container>
        </div>
    );
  }
}

export default Home;
