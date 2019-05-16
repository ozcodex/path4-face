
import React, { Component } from 'react';
import Background from '../Background.jsx';
import Banner from '../Banner.jsx'


class Home extends Component {
  render() {
    return (
        <div>
          <h2>Home</h2>
          <Background />
          <header className="App-header">
          <Banner />
         </header>
        </div>

    

    );
  }
}

export default Home;