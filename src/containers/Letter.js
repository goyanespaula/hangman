// libraries
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// src
import { ADD_LETTER } from "../actions";

const propTypes = {
  letter: PropTypes.string.isRequired,
  disabled: false
};

class Letter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ disabled: true });
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
  return {
    isPlaying: state.isPlaying
  };
}

Letter.propTypes = propTypes;

export default connect(mapStateToProps)(Letter);
