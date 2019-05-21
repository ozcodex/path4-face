
import React, { Component } from 'react';
import Background from './Background.jsx';
import Banner from './Banner.jsx'


class Home extends Component {
  render() {
    return (
        <div>
          <Background />
          <Banner />
        </div>
    );
  }
}

export default Home;
