import React from 'react';

class Logo extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      text: ""
    }
  }

  render(){
    return (
      <svg className='Logo' width="269" height="498" data-name="Layer 1" version="1.1" viewBox="0 0 269 498" xmlns="http://www.w3.org/2000/svg">
        <title>Path 4 Logo</title>
        <path className="cls-1 gr" d="m70 97h6.3q34 0 54 39a74 74 0 0 1 4 23q0 39-44 58l-13 1.6h-5.6q-22 0-40-16v109q0 6.5-9.5 8.7h-0.79q-8.5 0-9.5-11v-148q0-13 11-13 8.9 0 10 19 0 12 17 25a35 35 0 0 0 21 6.3h4.8q26 0 37-32l0.79-10q0-27-31-39l-8.7-0.79h-4q-21 0-36 24l-5.6 1.6h-0.7q-9.5-2-9.5-9.5v-0.79q0-11 27-29 12-6.3 24-6.3z"/>
        <path className="cls-2" d="m141 111h1.6q6.5 0 8.7 8.7v44q0 31 24 42 7.1 4 19 4 27 0 38-30l1.6-13v-45q1.4-10 8.7-10h4q7.1 3.4 7.1 11v45q0 33-28 53 28 19 28 52v45q-1.2 11-8.7 11h-2.4q-7.3 0-8.7-10v-45q0-30-27-41l-35-5.6q-40-17-40-63v-39q0.03-13 9.5-13z"/>
        <text className="cls-3" x="7.8400002" y="426.67999" >P
        <tspan className="cls-4" x="38.290001" y="426.67999">A</tspan>
        <tspan className="cls-5" x="72.019997" y="426.67999">TH</tspan>
        <tspan className="cls-6" x="159.58" y="426.67999">F</tspan>
        <tspan className="cls-7" x="188.73" y="426.67999">OR</tspan>
        </text>
        <rect className="cls-1" y="460" width="269" height="38"/>
        <rect className="cls-1" width="269" height="38" />
      </svg>
    );
  }

}

export default Logo;
