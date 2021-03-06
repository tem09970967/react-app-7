import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state={
      age:"23",
      name:"Eptiblya",
      isLoggedIn: true
    }
  }
  render() {
    let wordDisplay
    if (this.state.isLoggedIn === true) {
      wordDisplay="IN"
    } else {
      wordDisplay="OUT"
    }
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3><font color="#3ac1ef">▍{this.state.age} years old</font></h3>
        <p>You are currently logged <span>{wordDisplay}</span></p>
      </div>
    )
  }
  

}


export default App;
