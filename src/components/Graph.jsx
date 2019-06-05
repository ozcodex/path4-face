import React from 'react';
import {Col,Row } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';

class Graph extends React.Component {

  constructor(props){
    super(props);
    this.state = {} 
    const line_color = 'rgba(75,192,192,1)' 
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
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
        data: [65, 59, 80, 81, 56, 55, 40]
      }]
		  }
    this.options = {
      legend: {
        display: false,
      },
    }
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
