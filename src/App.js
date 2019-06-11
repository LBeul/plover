import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import InputBox from "./components/InputBox.js";
import CoverPreview from "./components/CoverPreview.js";

class App extends React.Component {
  constructor() {
    super();
    // Initialize the state
    this.state = { ticker: 0 };
    // Bind the handleClick() function to this component
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // On click, increment state.ticker by 1
    this.setState({ ticker: this.state.ticker + 1 });
    console.log("state is " + this.state.ticker);
  }
  render() {
    return (
      <div className="app">
        <Header />
        <InputBox handleClick={this.handleClick} />
        <CoverPreview
          artist="Skibidi Babab"
          image="https://dummyimage.com/300x300/000000/cde5e3&text=dummy"
          artistLink="#"
        />
      </div>
    );
  }
}

export default App;
