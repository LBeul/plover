import React from "react";
import "./App.css";
import Header from "./Header";
import InputBox from "./InputBox";
import CoverPreview from "./CoverPreview";

function App() {
  return (
    <div className="app">
      <Header />
      <InputBox />
      <CoverPreview artist="xyz" image="https://via.placeholder.com/300" />
    </div>
  );
}

export default App;
