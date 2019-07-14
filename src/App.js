import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import CoverPreview from "./components/CoverPreview";
import keys from "./keys";

class App extends Component {
  constructor() {
    super();
    // Initialize the state
    this.state = { topic: "", caption: "", image: "" };
  }
  // Function that handles topic input
  handleTopicInput = event => {
    this.setState({ topic: event.target.value });
  };
  // Function that handles caption input
  handleCaptionInput = event => {
    this.setState({ caption: event.target.value });
  };
  // Function that handles submit
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.topic !== "") {
      fetch(
        `https://api.unsplash.com/search/photos?query=${
          this.state.topic
        }&orientation=squarish`,
        {
          headers: {
            Authorization: `Client-ID ${keys.unsplashAccessKey}`
          }
        }
      )
        .then(result => result.json())
        .then(data => {
          if (data.results.length !== 0) {
            this.setState({ image: data.results[0] });
          } else {
            this.setState({ image: null });
          }
        });
    }
  };

  render() {
    return (
      <div className="app">
        <Header />
        <InputBox
          handleTopicInput={this.handleTopicInput}
          handleCaptionInput={this.handleCaptionInput}
          handleSubmit={this.handleSubmit}
        />
        <CoverPreview
          artist={
            this.state.image ? this.state.image.user.username : "Some Guy"
          }
          image={
            this.state.image
              ? this.state.image.urls.small
              : "https://www.kawasaki-india.com/wp-content/uploads/2017/12/color-2.jpg"
          }
          artistLink={this.state.image ? this.state.image.user.links.html : "#"}
        />
      </div>
    );
  }
}

export default App;
