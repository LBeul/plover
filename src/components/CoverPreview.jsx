import React from "react";
import "../styles/CoverPreview.css";

function CoverPreview({ image, artistLink, artist, caption }) {
  return (
    <div className="cover-prev">
      {/* Wrap Picture & Caption into one div */}
      <div id="cover-wrapper">
        {/* Picture result based on searched topic */}
        <img src={image} alt="Your Cover!" />
        {/* Reference according to unsplash API guidelines */}
        <div className="caption-text">{caption}</div>
      </div>
      <p className="credits">
        Picture by <a href={artistLink}>{artist}</a> from
        <a href="https://unsplash.com/"> Unsplash</a>
      </p>
      <button>Download!</button>
    </div>
  );
}

export default CoverPreview;
