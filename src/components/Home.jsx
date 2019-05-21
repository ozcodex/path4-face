
import React, { Component } from 'react';
import { Container,Col,Row } from 'react-bootstrap';
import Background from './Background.jsx';
import Banner from './Banner.jsx'
import Logo from './Logo.jsx'

class Home extends Component {
  render() {
    return (
        <div>
          <Background />
          <Container>
            <Row>
              <Col className="p-2">
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <Logo />
              </Col>
            </Row>
            <Banner />
          </Container>
        </div>
    );
  }
}

export default Home;
