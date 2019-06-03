import React, { Component } from "react";
import './ButtonList.css';

class ButtonList extends Component {
  static defaultProps = {
      colors: ["#e056fd", "#eb4d4b", "#badc58", "#f0932b"]
  };
  constructor(props){
    super(props);
    this.state = { color: "cyan"}
  }
  changeColor(newColor){
    console.log(`newColor is: ${newColor}`);
    this.setState({ color: newColor });
  }

  render(){
    return(
      <div className='ButtonList' style={{backgroundColor: this.state.color}}>
        {this.props.colors.map(c => {
          const colorObject = { backgroundColor: c };
          return <button style={colorObject} onClick={this.changeColor.bind(this, c)}>Click On Me!</button>;
        })}
      </div>
    );
  }
}

export default ButtonList;