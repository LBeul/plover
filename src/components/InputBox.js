import React from "react";
import "../styles/InputBox.css";

class InputBox extends React.Component {
  constructor() {
    super();
    this.state = { test: "test" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="input-box">
        <input type="text" placeholder="topic" />
        <br />
        <input type="text" placeholder="caption" />
        <br />
        <button onClick={this.handleClick}>Generate!</button>
      </div>
    );
  }
}

export default InputBox;
