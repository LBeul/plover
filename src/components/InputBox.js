import React from "react";
import "../styles/InputBox.css";

class InputBox extends React.Component {
  render() {
    return (
      <div className="input-box">
        <input type="text" placeholder="topic" />
        <br />
        <input type="text" placeholder="caption" />
        <br />
        <button>Generate!</button>
      </div>
    );
  }
}

export default InputBox;
