import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import InputBox from "./components/InputBox.js";
import CoverPreview from "./components/CoverPreview.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = { ticker: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
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
