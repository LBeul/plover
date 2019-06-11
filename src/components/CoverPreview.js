import React, { Component } from "react";
import "../styles/CoverPreview.css";

class CoverPreview extends Component {
  render(props) {
    return (
      <div className="cover-prev">
        {/* Picture result based on searched topic */}
        <img src={this.props.image} alt="Your Cover!" />
        {/* Reference according to unsplash API guidelines */}
        <p>
          Picture by <a href={this.props.artistLink}>{this.props.artist}</a>{" "}
          from <a href="https://unsplash.com/">Unsplash</a>
        </p>
        <button>Download!</button>
      </div>
    );
  }
}

export default CoverPreview;
