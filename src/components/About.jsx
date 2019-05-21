import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import lu from '../assets/lu.jpg'; 

class About extends Component {
  render() {
    return (
        <div>
        
        <div id="container">
  
            <figure>
                <img src={lu} alt ="pic" width="550px" height="350px" />
                <figcaption>Wei-Chung Wang</figcaption>
                <figcaption>weichuw@usc.edu</figcaption>
            </figure>


            <figure>
                <img src={lu} alt = "pic" width="550px" height="350px" />
                <figcaption>Lu Zhang</figcaption>
                <figcaption>zhan634@usc.edu</figcaption>
            </figure>


            <figure>
                <img src={lu} alt = "pic" width="550px" height="350px" />
                <figcaption>Ruolei Xia</figcaption>
                <figcaption>ruoleixi@usc.edu</figcaption>
            </figure>

            <figure>
                <img src={lu} alt = "pic" width="550px" height="350px" />
                <figcaption>Ruolei Xia</figcaption>
                <figcaption>ruoleixi@usc.edu</figcaption>
            </figure>

            <figure>
                <img src={lu} alt = "pic" width="550px" height="350px" />
                <figcaption>Ruolei Xia</figcaption>
                <figcaption>ruoleixi@usc.edu</figcaption>
            </figure>

            <figure>
                <img src={lu} alt = "pic" width="550px" height="350px" />
                <figcaption>Ruolei Xia</figcaption>
                <figcaption>ruoleixi@usc.edu</figcaption>
            </figure>
 
        </div>
        </div>

    );
  }
}

export default About;
