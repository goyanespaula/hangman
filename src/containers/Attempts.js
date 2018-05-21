// libraries
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// src

const propTypes = {
  attempts: PropTypes.number.isRequired
};

class Attempts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <section style={{}}>Attempts: {this.props.attempts}</section>;
  }
}

function mapStateToProps(state) {
  return {
    attempts: state.attempts
  };
}

Attempts.propTypes = propTypes;

export default connect(mapStateToProps)(Attempts);
