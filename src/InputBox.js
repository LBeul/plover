import React from "react";
import "./InputBox.css";

function InputBox() {
  return (
    <div className="input-box">
      <input type="text" placeholder="image" />
      <br />
      <input type="text" placeholder="caption" />
      <br />
      <button>Generate!</button>
    </div>
  );
}

export default InputBox;
