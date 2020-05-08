import React, { Component } from "react";
import "./App.css";
import Validation from "./Components/Validation";

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
        <Validation length={this.state.userInput.length} />  
      </div>
    );
  }
}

export default App;
