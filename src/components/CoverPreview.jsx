import React from "react";
import "../styles/CoverPreview.css";

function CoverPreview(props) {
  return (
    <div className="cover-prev">
      {/* Picture result based on searched topic */}
      <img src={props.image} alt="Your Cover!" />
      {/* Reference according to unsplash API guidelines */}
      <p className="credits">
        Picture by <a href={props.artistLink}>{props.artist}</a> from{" "}
        <a href="https://unsplash.com/">Unsplash</a>
      </p>
      <button>Download!</button>
    </div>
  );
}

export default CoverPreview;
