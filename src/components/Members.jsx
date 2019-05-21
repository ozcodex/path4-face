import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import lu from '../assets/lu.jpg'; 
import oscar from '../assets/oscar.jpg'; 
import henrik from '../assets/henrik.jpg'; 
import farnaz from '../assets/farnaz.jpg'; 

class Members extends Component {
  render() {
    return (
        <div className="row">
          <Carousel className="col-6 offset-3">
            <Carousel.Item>
              <img
                className="d-block w-100 rounded-circle"
                src={lu}
              />
              <Carousel.Caption>
                <p>Lu</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded-circle"
                src={oscar}
              />

              <Carousel.Caption>
                <p>Oscar</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded-circle"
                src={henrik}
              />

              <Carousel.Caption>
                <p>Henrik</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded-circle"
                src={farnaz}
              />

              <Carousel.Caption>
                <p>Farnaz</p>
              </Carousel.Caption>
            </Carousel.Item> 
          </Carousel>
        </div>
    );
  }
}

export default Members;
