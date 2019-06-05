import React from 'react';
import {Image,Col,Row,Container} from 'react-bootstrap';
import Background from './Background.jsx';
const db = require('../db.js');

class Vision extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      image: '',
      info: 'Info Here'
    }
    this.watchData = this.watchData.bind(this);
  }

  watchData(){
    var img_collection = db.collection('images').orderBy('time','desc').limit(1);
    var observer = img_collection.onSnapshot(snap => {
      console.log(`Received query snapshot`);
      console.log(snap.docs[0].data())
      // ...
    }, err => {
      console.log(`Encountered error: ${err}`);
    });
  };

  componentDidMount(){
    this.watchData();
  }

  render(){
    return (
      <div>
        <Background />
        <Container>
          <Row>
            <Col md={{span:3, offset:2}}>
              <Image fluid rounded src={this.state.image} />
            </Col>
            <Col md={{span:3, offset:2}} className="Banner text-center">
              {this.state.info}
            </Col>
          </Row>
          <Row>
            <Col className='p-3'></Col>
          </Row>
          <Row>
            <Col className="Banner text-center">
              Coming soon: Historical Data
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

}

export default Vision;
