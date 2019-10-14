import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import CoverPreview from "./components/CoverPreview";
import keys from "./keys";
import html2canvas from "html2canvas";

let captionText = "";

const App = () => {
  const [keyword, setKeyword] = useState("");
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");

  // Function that handles keyword input
  const handleKeywordInput = event => {
    setKeyword(event.target.value);
  };
  // Function that handles caption input
  const handleCaptionInput = event => {
    captionText = event.target.value;
  };

  // Function that handles submit
  const handleSubmit = event => {
    event.preventDefault();
    if (keyword !== "") {
      fetch(
        `https://api.unsplash.com/search/photos?query=${keyword}&orientation=squarish`,
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
            alert("No pictures found... Try another keyword!");
          }
        })
        .then(setCaption(captionText))
        .then(
          html2canvas(document.querySelector("#cover-wrapper")).then(canvas => {
            document.body.appendChild(canvas);
            console.log(canvas);
          })
        );
    }
  };

  // TODO: Need some sort of feedback if the "Keyword" input shows no results!

  return (
    <div className="app">
      <Header />
      <InputBox
        handleKeywordInput={handleKeywordInput}
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
