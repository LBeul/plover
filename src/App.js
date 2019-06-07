import React from "react";
import "./App.css";
import Header from "./Header.js";
import InputBox from "./InputBox.js";
import CoverPreview from "./CoverPreview.js";

function App() {
  return (
    <div className="app">
      <Header />
      <InputBox />
      <CoverPreview
        artist="Angelo Burlesconi"
        image="https://dummyimage.com/300x300/000000/cde5e3&text=dummy"
        artistLink="#"
      />
    </div>
  );
}

export default App;
