import React from 'react';
import './App.css';

class Background extends React.Component {

  constructor(props){
    super(props);
    this.words = [
      "Hello World", //English
      "Hola Mundo",  //Spanish
      "Saluton Mondon", //Esperanto
      "Hallo Welt", //German
      "Salam Donya",  //Farsi/Urdu
      "Hello World" 
    ];
    this.state = {
    text : ""
    }
  }

  GenText(times){
    let temp_text = "";
    let last_pos = 0;
    let random_pos = 0;
    for(let i = times; i > 0; i--){
      while (random_pos == last_pos){
        random_pos = Math.floor(Math.random() * this.words.length);
      }
      last_pos = random_pos;
      temp_text += this.words[random_pos] + '! ';
    }
    this.setState({
      text : temp_text
    });
  }

  componentDidMount(){
    this.GenText(1000);
  }

  render(){
    return (
      <div className="Background">
        {this.state.text}
      </div>
    );
  }

}

export default Background;
