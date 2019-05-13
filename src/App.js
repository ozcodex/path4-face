import React from 'react';
import './App.css';
import Background from './Background.jsx'
import Banner from './Banner.jsx'

function App() {
  return (
    <div className="App">
      <Background />
      <header className="App-header">
        <Banner />
      </header>
    </div>
  );
}

export default App;
