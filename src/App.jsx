import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    userInput: ''
  }

  userInputChangedHandler = (event) => {
    this.setState({userInput: event.target.value})
  }
  render() {
    return (
      <div className="App">
        <h2>2nd Assignment</h2>
        <input type="text" onChange={this.userInputChangedHandler} value={this.state.userInput}/>
        <p>Length of your input is: {this.state.userInput.length} </p>
      </div>
    );
  }
}

export default App;
