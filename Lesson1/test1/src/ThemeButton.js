import React, { Component } from "react";
import { ThemeContext } from "./themes-context";

class ThemedButton extends Component {
  render() {
    return (
      <button
        className="btn"
        style={{
          backgroundColor: this.context.background,
          color: this.context.fontColor,
        }}
        onClick={this.props.toggleTheme}
      >
        Dynamic Theme
      </button>
    );
  }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;
