import React, { Component } from 'react';
// import WiseSquare from './WiseSquare';
// import AnnoyingForm from './AnnoyingForm';
// import CopyDemo from './CopyDemo';
// import ButtonList from './ButtonList';
import NumberList from './NumberList';
import BetterNumberList from './BetterNumberList';
// import './App.css';


class App extends Component {

  render(){
    return(
      <div className="App">
        <h1>React Events</h1>
        {/* <WiseSquare />
        <AnnoyingForm />
        <CopyDemo /> */}
        {/* <ButtonList /> */}
        <NumberList />
        <BetterNumberList />
      </div>
    );
  }
}

export default App;
