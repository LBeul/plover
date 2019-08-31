import React from "react";
import "../styles/InputBox.css";

function InputBox(props) {
  return (
    <form className="input-box" onSubmit={props.handleSubmit}>
      {/* Topic input for image search */}
      <input
        type="text"
        placeholder="topic"
        onChange={props.handleTopicInput}
      />
      <br />
      {/* Caption aka name of playlist */}
      <input
        type="text"
        placeholder="caption"
        onChange={props.handleCaptionInput}
      />
      <br />
      {/* Button that triggers the handleClick function given as props */}
      <input id="button" type="submit" value="Generate!" />
    </form>
  );
}

export default InputBox;
