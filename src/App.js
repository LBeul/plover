import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import InputBox from "./components/InputBox.js";
import CoverPreview from "./components/CoverPreview.js";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <InputBox />
        <CoverPreview
          artist="Skibidi Babab"
          image="https://dummyimage.com/300x300/000000/cde5e3&text=dummy"
          artistLink="#"
        />
      </div>
    );
  }
}

export default App;
