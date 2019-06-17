import React, { Component } from "react";
import "../styles/InputBox.css";

class InputBox extends Component {
  render() {
    return (
      <form className="input-box" onSubmit={this.props.handleSubmit}>
        {/* Topic input for image search */}
        <input
          type="text"
          placeholder="topic"
          onChange={this.props.handleTopicInput}
        />
        <br />
        {/* Caption aka name of playlist */}
        <input
          type="text"
          placeholder="caption"
          onChange={this.props.handleCaptionInput}
        />
        <br />
        {/* Button that triggers the handleClick function given as props */}
        <input id="button" type="submit" value="Generate!" />
      </form>
    );
  }
}

export default InputBox;
