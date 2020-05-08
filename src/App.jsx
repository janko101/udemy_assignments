import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    userInput: ''
  }
  render() {
    return (
      <div className="App">
        <h2>2nd Assignment</h2>
        <input type="text" />
        <p>Length of your input is: </p>
      </div>
    );
  }
}

export default App;
