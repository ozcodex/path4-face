import React from 'react';

class Info extends React.Component {

  constructor(props){
    super(props);
    this.initial_text = "Hello World";
    this.state = {
      initial : true,
      text: this.initial_text
    }
  }

  render(){
    return (
      <div>
        <h2>Path4</h2>
        <p className="Info">
          Ohhhh!!!!
        </p>
      </div>
    );
  }

}

export default Info;
