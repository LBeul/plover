import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header.js";
import InputBox from "./components/InputBox.js";
import CoverPreview from "./components/CoverPreview.js";

class App extends Component {
  constructor() {
    super();
    // Initialize the state
    this.state = { topic: "", caption: "" };
    // Bind the handleClick() function to this component
    this.handleTopicInput = this.handleTopicInput.bind(this);
    this.handleCaptionInput = this.handleCaptionInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTopicInput(event) {
    this.setState({ topic: event.target.value });
  }

  handleCaptionInput(event) {
    this.setState({ caption: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div className="app">
        <Header />
        <InputBox
          handleTopicInput={this.handleTopicInput}
          handleCaptionInput={this.handleCaptionInput}
          handleSubmit={this.handleSubmit}
        />
        <CoverPreview
          artist="Skibidi Babab"
          image="https://placekitten.com/g/300/300"
          artistLink="#"
        />
      </div>
    );
  }
}

export default App;
