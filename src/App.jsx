import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import CoverPreview from "./components/CoverPreview";
import keys from "./keys";

const App = () => {
  const [topic, setTopic] = useState("");
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");

  // Function that handles topic input
  const handleTopicInput = event => {
    setTopic(event.target.value);
  };
  // Function that handles caption input
  let captionText = "";
  const handleCaptionInput = event => {
    captionText = event.target.value;
  };
  // Function that handles submit
  const handleSubmit = event => {
    event.preventDefault();
    if (topic !== "") {
      fetch(
        `https://api.unsplash.com/search/photos?query=${topic}&orientation=squarish`,
        {
          headers: {
            Authorization: `Client-ID ${keys.unsplashAccessKey}`
          }
        }
      )
        .then(result => result.json())
        .then(data => {
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

  // TODO: Need some sort of feedback if the "topic" input shows no results! Maybe through hook?

  return (
    <div className="app">
      <Header />
      <InputBox
        handleTopicInput={handleTopicInput}
        handleCaptionInput={handleCaptionInput}
        handleSubmit={handleSubmit}
      />
      <CoverPreview
        image={
          image
            ? image.urls.small
            : "https://www.kawasaki-india.com/wp-content/uploads/2017/12/color-2.jpg"
        }
        caption={caption}
        artist={image ? image.user.username : "Some Guy"}
        artistLink={image ? image.user.links.html : "#"}
      />
    </div>
  );
};

export default App;
