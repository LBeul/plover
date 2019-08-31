import React from "react";
import "../styles/CoverPreview.css";

function CoverPreview({ image, artistLink, artist }) {
  return (
    <div className="cover-prev">
      {/* Picture result based on searched topic */}
      <img src={image} alt="Your Cover!" />
      {/* Reference according to unsplash API guidelines */}
      <p className="credits">
        Picture by <a href={artistLink}>{artist}</a> from{" "}
        <a href="https://unsplash.com/">Unsplash</a>
      </p>
      <button>Download!</button>
    </div>
  );
}

export default CoverPreview;
