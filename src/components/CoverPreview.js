import React from "react";
import "../styles/CoverPreview.css";

class CoverPreview extends React.Component {
  render(props) {
    return (
      <div className="cover-prev">
        <img src={this.props.image} alt="Your Cover!" />
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
