// libraries
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// src

const propTypes = {
  currGuess: PropTypes.string.isRequired
};

class CurrentGuess extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section style={{ display: "flex", flexDirection: "column" }}>
        Current Guess: {this.props.currGuess}{" "}
        <small>"?"s are unguessed characters</small>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    currGuess: state.currGuess
  };
}

CurrentGuess.propTypes = propTypes;

export default connect(mapStateToProps)(CurrentGuess);
