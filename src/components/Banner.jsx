import React from 'react';
import {Col,Row } from 'react-bootstrap';

const API = 'http://brain-dot-project-path4.appspot.com/';

class Banner extends React.Component {

  constructor(props){
    super(props);
    this.alternate_text = "Hello World";
    this.initial_text = "Hello World";
    this.state = {
      text: this.initial_text
    }
    this.changeTitle = this.changeTitle.bind(this);
  }

  changeTitle(){
    fetch(API + 'random')
      .then(response => response.json())
      .then(async (data) => {
        let new_text = data.text
        while(this.state.text === new_text){
          let response = await fetch(API + 'random')
          let new_data = await response.json
          new_text = new_data.text
        }
        if (new_text){
          this.setState({
            text: new_text 
          });
        }else{
          this.changeTitle();
        }
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
