import React from "react";
import "../styles/InputBox.css";

function InputBox({ handleSubmit, handleKeywordInput, handleCaptionInput }) {
  return (
    <form className="input-box" onSubmit={handleSubmit}>
      {/* Keyword input for image search */}
      <input type="text" placeholder="keyword" onChange={handleKeywordInput} />
      <br />
      {/* Caption aka name of playlist */}
      <input
        type="text"
        placeholder="caption"
        maxLength="12"
        onChange={handleCaptionInput}
      />
      <br />
      {/* Button that triggers the handleClick function given as props */}
      <input id="button" type="submit" value="Generate!" />
    </form>
  );
}

export default InputBox;
