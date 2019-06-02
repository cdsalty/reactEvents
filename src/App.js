import React, { Component } from 'react';
// import WiseSquare from './WiseSquare';
// import AnnoyingForm from './AnnoyingForm';
// import CopyDemo from './CopyDemo';
import ButtonList from './ButtonList';
import './App.css';


class App extends Component {

  render(){
    return(
      <div className="App">
        <h1>React Events</h1>
        {/* <WiseSquare />
        <AnnoyingForm />
        <CopyDemo /> */}
        <ButtonList />
      </div>
    );
  }
}

export default App;
