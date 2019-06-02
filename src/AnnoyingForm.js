import React, { Component } from 'react';

class AnnoyingForm extends Component{
//   handleKeyUp(){
//       alert("You just clicked the wrong button!");
//   }  
    
// if you need it to handle an event upon KeyUp or when a BUTTON IS CLICKED
handleKeyUp(event){
  if (event.keyCode === 13) {
    alert("You pressed enter. We will now run logic on our end.")
  } else{
    alert("just press enter so we can move on...");
  }
}

  render(){
    return(
    <div>
        <h3>Try typing in here:</h3>
        <textarea onKeyUp={this.handleKeyUp} />
    </div>
    );
  }
}

export default AnnoyingForm; 