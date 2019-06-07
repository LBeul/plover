import React from "react";
import "./CoverPreview.css";

function CoverPreview(props) {
  return (
    <div className="cover-prev">
      <img src={props.image} alt="Your Cover!" />
      <p>Picture by {props.artist} </p>
      <button>Download!</button>
    </div>
  );
}

export default CoverPreview;
