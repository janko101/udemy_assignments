import React, { Component } from "react";
import "./App.css";
import Validation from "./Components/Validation";
import Char from "./Components/Char";

class App extends Component {
  state = {
    userInput: "",
  };

  userInputChangedHandler = (event) => {
    this.setState({ userInput: event.target.value });
  };

  deleteCharHandler = (charIndex) => {
    const inputChars = this.state.userInput.split("");
    inputChars.splice(charIndex, 1);
    const updatedChars = inputChars.join("");
    this.setState({ userInput: updatedChars });
  };
  render() {
    const charList = this.state.userInput.split("").map((char, index) => {
      return (
        <Char
          key={index}
          character={char}
          click={() => this.deleteCharHandler(index)}
        />
      );
    });
    return (
      <div className="App">
        <h2>2nd Assignment</h2>
        <input
          type="text"
          onChange={this.userInputChangedHandler}
          value={this.state.userInput}
        />
        <Validation length={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
