import React, { Component } from "react";
import "../styles/InputBox.css";

class InputBox extends Component {
  render() {
    return (
      <div className="input-box">
        {/* Topic input for image search */}
        <input type="text" placeholder="topic" />
        <br />
        {/* Caption aka name of playlist */}
        <input type="text" placeholder="caption" />
        <br />
        {/* Button that triggers the handleClick function given as props */}
        <button onClick={this.props.handleClick}>Generate!</button>
      </div>
    );
  }
}

export default InputBox;
