import React from 'react';

class Banner extends React.Component {

  constructor(props){
    super(props);
    this.new_text = "Hello Nerds";
    this.state = {
    text : "Hello World"
    }
    this.changeTitle = this.changeTitle.bind(this);
  }

  changeTitle(){
    this.setState({text: this.new_text });
  };

  render(){
    return (
      <p className="Banner">
        Path4 Team says: <a onClick={this.changeTitle}>{this.state.text}</a>
      </p>
    );
  }

}

export default Banner;