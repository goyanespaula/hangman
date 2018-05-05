import React, { Component } from "react";
import "./App.css";
import LettersBoard from "./containers/LettersBoard";

class App extends Component {
  render() {
    return (
      <section style={{ display: "flex" }}>
        <LettersBoard />
      </section>
    );
  }
}

export default App;
