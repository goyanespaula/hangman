// libraries
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// src
import Letter from "./Letter";
import alphabet from "../helpers/alphabet";

const propTypes = {
  letter: PropTypes.string.isRequired
};

class LettersBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: false,
      alphabet: alphabet
    };
  }
  render() {
    const letters = this.state.alphabet.map((l, i) => (
      <Letter letter={l} key={i} />
    ));
    return (
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "350px"
        }}
      >
        {letters}
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    isPlaying: state.isPlaying
  };
}

LettersBoard.propTypes = propTypes;

export default connect(mapStateToProps)(LettersBoard);
