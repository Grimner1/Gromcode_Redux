import React, { Component } from "react";
import { connect } from "react-redux";
import * as usersActions from "./users.actions";
import propTypes from "prop-types";

class SearchField extends Component {
  state = {
    userName: "",
  };

  onChange = (event) => {
    this.setState({ userName: event.target.value });
  };

  handleUserSearch = () => {
    this.props.fetchUserData(this.state.userName);
  };

  render() {
    return (
      <div className="name-form">
        <input
          type="text"
          className="name-form__input"
          value={this.state.userName}
          onChange={this.onChange}
        />
        <button className="name-form__btn btn" onClick={this.handleUserSearch}>
          Show
        </button>
      </div>
    );
  }
}

SearchField.propTypes = {
  fetchUserData: propTypes.func.isRequired,
};

const mapDispatch = {
  fetchUserData: usersActions.fetchUserData,
};

export default connect(null, mapDispatch)(SearchField);
