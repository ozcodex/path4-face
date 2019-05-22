import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import {Col,Row } from 'react-bootstrap';
import lu from '../assets/lu.jpg'; 
import oscar from '../assets/oscar.jpg'; 
import henrik from '../assets/henrik.jpg'; 
import farnaz from '../assets/farnaz.jpg'; 
import bernd from '../assets/bernd.jpg'; 
import faizan from '../assets/faizan.jpg'; 

class Members extends Component {

  constructor(props){
    super(props);
    this.members = [
      {
        name: "Lu Zheng",
        pic: lu
      },
      {
        name: "Oscar Bernal",
        pic: oscar
      },
      {
        name: "Henrik Bredenbals",
        pic: henrik
      },
      {
        name: "Farnaz",
        pic: farnaz
      },
      {
        name: "Bernd Weschenbach",
        pic: bernd
      },
      {
        name: "Faizan",
        pic: faizan
      }      
    ]
    this.carousel = this.createCarousel(this.members);
  }

  createCarousel(items_array){
    var props = {};
    var car_items = [];
    var i = 0;
    items_array.forEach((element)=>{
      i++;
      let image = React.createElement('img',{
        key: 'image'+i,
        className: 'd-block w-100 rounded-circle p-3',
        src: element.pic,
        alt: element.name
      });
      let span = React.createElement('span',{className:'black_square'},element.name);
      let paragraph = React.createElement('p',props,span);
      let caption = React.createElement(Carousel.Caption,{key: 'caption'+i},paragraph);      
      let item = React.createElement(Carousel.Item,{key: 'item'+i},[image,caption]);
      car_items.push(item);
    });
    return React.createElement(Carousel,props,car_items);
  }

  render() {
    return (
      <Row>
        <Col className="col-6 offset-3">
          {this.carousel}
        </Col>
      </Row>
    );
  }
}

export default Members;
