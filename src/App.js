// libraries
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// src
import "./App.css";
import LettersBoard from "./containers/LettersBoard";
import Attempts from "./containers/Attempts";
import CurrentGuess from "./containers/CurrentGuess";

const propTypes = {
  showWinScreen: PropTypes.bool.isRequired,
  showLoseScreen: PropTypes.bool.isRequired
};

class App extends Component {
  render() {
    const showWinScreen = this.props.showWinScreen ? <div>You Won!</div> : "";
    const showLoseScreen = this.props.showLoseScreen ? (
      <div>You Lost :(</div>
    ) : (
      ""
    );
    return (
      <section style={{ display: "flex", justifyContent: "space-around" }}>
        <LettersBoard />
        <Attempts />
        <CurrentGuess />
        {showWinScreen}
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    showWinScreen: state.showWinScreen,
    showLoseScreen: state.showLoseScreen
  };
}

App.propTypes = propTypes;

export default connect(mapStateToProps)(App);
