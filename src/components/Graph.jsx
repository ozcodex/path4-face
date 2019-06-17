import React from 'react';
import {Col,Row } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';

const API = 'http://brain-dot-project-path4.appspot.com/';

class Graph extends React.Component {

  constructor(props){
    super(props);
    this.state = {} 
    const line_color = 'rgba(75,192,192,1)'
    this.data = {
      labels: [],
      datasets: [{
        label: 'Person Counter',
        fill: false,
        lineTension: 0.1,
        backgroundColor: line_color,
        borderColor: line_color, 
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: line_color,
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: line_color,
        pointHoverBorderColor: line_color,
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: []
      }]
		  }
    this.options = {
      legend: {
        display: false,
      },
    }
    this.updateInfo();
  }

  updateInfo(){
    fetch(API + 'data')
      .then(response => response.json())
      .then((data) => {
        this.data.labels = data.label;  
        this.data.datasets[0].data = data.data;
      })
  }

  render(){
    return (
      <Row>
        <Col className='Graph'>
          <Line data={this.data} options={this.options} />
        </Col>
      </Row>
    );
  }

}

export default Graph;
