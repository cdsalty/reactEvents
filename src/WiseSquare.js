import React, { Component } from "react";
import './WiseSquare.css';

class WiseSquare extends Component {
  dispenseWisdom() {
      let messages = [
        "A fool thinks himself to be wise, but a wiseman knows himself to be a fool.",
        "Educating the mind without educating the heart is no education at all.",
        "Not everything that is faced can be changed, but nothing can be changed until it's faced"
      ];
      let rIndex = Math.floor(Math.random() * messages.length); // random Index number from 0-2
      console.log(messages[rIndex]);
  }

  render(){
      return <div className='WiseSquare' onMouseEnter={this.dispenseWisdom}> 😀</div>;
  }
}

export default WiseSquare;