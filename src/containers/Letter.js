// libraries
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// src
import {
  increaseAttempts,
  updateGuess,
  updateWinStatus
} from "../actions/actionCreators";

const propTypes = {
  letter: PropTypes.string.isRequired,
  currPhrase: PropTypes.string.isRequired,
  currGuess: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

class Letter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.attemptLetter = this.attemptLetter.bind(this);
  }

  handleClick() {
    this.setState({ disabled: true });
    if (this.state.disabled) return;
    let newGuess = this.attemptLetter(this.props.letter);
    if (newGuess === this.props.currGuess) {
      this.props.dispatch(increaseAttempts());
    } else if (newGuess === this.props.currPhrase) {
      this.props.dispatch(updateWinStatus(newGuess));
    } else {
      this.props.dispatch(updateGuess(newGuess));
    }
  }

  attemptLetter(letter) {
    let newGuess = this.props.currGuess.split("");
    this.props.currPhrase.split("").forEach((l, i) => {
      if (l === letter) {
        newGuess[i] = l;
      }
    });
    return newGuess.join("");
  }

  render() {
    const cursorStyle = this.state.disabled ? "not-allowed" : "pointer";
    const backgroundColor = this.state.disabled ? "lightgray" : "floralwhite";
    return (
      <div
        style={{
          width: "75px",
          height: "75px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: backgroundColor,
          border: "2px solid lightgray",
          cursor: cursorStyle
        }}
        onClick={this.handleClick}
      >
        {this.props.letter}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { currPhrase: state.currPhrase, currGuess: state.currGuess };
}

Letter.propTypes = propTypes;

export default connect(mapStateToProps)(Letter);
