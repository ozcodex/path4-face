import React from 'react';
import {Col,Row } from 'react-bootstrap';

const API = 'http://localhost:4242/';

class Banner extends React.Component {

  constructor(props){
    super(props);
    this.alternate_text = "Hello World";
    this.initial_text = "Hello World";
    this.state = {
      initial : true,
      text: this.initial_text
    }
    this.changeTitle = this.changeTitle.bind(this);
    this.getWord();
  }

  getWord(){
    fetch(API + 'hello')
      .then(response => response.json())
      .then(data => {
        this.alternate_text = data.message
      });
  }

  changeTitle(){
    //i negate the initial flag to get the "next" value and show the proper text
    var new_text = !this.state.initial ? this.initial_text : this.alternate_text;
    this.setState({
      text: new_text, 
      initial: !this.state.initial
    });
  };

  render(){
    return (
      <Row>
        <Col className="Banner text-center unselectable">
        Path4 Team says: <span onClick={this.changeTitle}>{this.state.text}</span>
        </Col>
      </Row>
    );
  }

}

export default Banner;
