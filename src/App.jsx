import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import CoverPreview from "./components/CoverPreview";
import keys from "./keys";

let captionText = "";

const App = () => {
  const [topic, setTopic] = useState("");
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");

  // Function that handles topic input
  const handleTopicInput = (event) => {
    setTopic(event.target.value);
  };
  // Function that handles caption input
  const handleCaptionInput = (event) => {
    captionText = event.target.value;
  };
  // Function that handles submit
  const handleSubmit = (event) => {
    event.preventDefault();
    if (topic !== "") {
      fetch(
        `https://api.unsplash.com/search/photos?query=${topic}&orientation=squarish`,
        {
          headers: {
            Authorization: `Client-ID ${keys.unsplashAccessKey}`,
          },
        }
      )
        .then((result) => result.json())
        .then((data) => {
          if (data.results.length !== 0) {
            setImage(
              data.results[Math.floor(Math.random() * data.results.length)]
            );
          } else {
            setImage(null);
          }
        });
      setCaption(captionText);
    }
  };

  // TODO: Loading Indicator & Handler for network errors

  return (
    <div className="app">
      <Header />
      <InputBox
        handleTopicInput={handleTopicInput}
        handleCaptionInput={handleCaptionInput}
        handleSubmit={handleSubmit}
      />
      <CoverPreview
        image={image ? image.urls.small : "https://via.placeholder.com/300"}
        caption={caption}
        artist={image ? image.user.username : "Some Guy"}
        artistLink={image ? image.user.links.html : "#"}
      />
    </div>
  );
};

export default App;
