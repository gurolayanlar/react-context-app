import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {themeContext => {
          const { isLightTheme, light, dark } = themeContext;
          const theme = isLightTheme ? light : dark;
          return (
            <div className="navbar" style={{ background: theme.bg }}>
                <span style={{color: theme.color}}>Navbar</span>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

