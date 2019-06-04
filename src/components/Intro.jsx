import React, { Component } from 'react';
import { Container,Col,Row,Image } from 'react-bootstrap';
import Background from './Background.jsx'

import crossing from '../assets/crossing.png'

class  Intro extends Component {
    render() {
      return (
        <div>
          <Background />
          <Container>
            <Row>
              <Col sm={{span: 3, offset:5}}>
                <Image src={crossing} rounded fluid />
              </Col>
            </Row>
            <Row>
              <Col className='p-3'></Col>
            </Row>
            <Row>
              <Col className="Banner text-center">
                Path 4: There are 4 directions when we stand at a crossing,so we could use path4 to choose a good direction.
              </Col>
            </Row>
            <Row>
              <Col className="Banner text-center">
                Also, we want to provide you with the best public transportation app experience by suggesting the best way(Path) for(4) you.
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  }
  
  export default Intro;
