import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import {Col,Row } from 'react-bootstrap';
import lu from '../assets/lu.jpg'; 
import oscar from '../assets/oscar.jpg'; 
import henrik from '../assets/henrik.jpg'; 
import farnaz from '../assets/farnaz.jpg'; 

class Members extends Component {
  render() {
    return (
      <Row>
        <Col className="col-6 offset-3">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded-circle"
                src={lu}
                alt=""
              />
              <Carousel.Caption>
                <p>Lu</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded-circle"
                src={oscar}
                alt=""
              />

              <Carousel.Caption>
                <p>Oscar</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded-circle"
                src={henrik}
                alt=""
              />

              <Carousel.Caption>
                <p>Henrik</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded-circle"
                src={farnaz}
                alt=""
              />

              <Carousel.Caption>
                <p>Farnaz</p>
              </Carousel.Caption>
            </Carousel.Item> 
          </Carousel>
        </Col>
      </Row>
    );
  }
}

export default Members;
