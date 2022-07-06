import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isDarkTheme: false,
    lightTheme: {
      background: "#FFFFFF",
      textcolor: "#000000",
    },
    darkTheme: {
      background: "#000000",
      textcolor: "#FFFFFF",
    },
  };

  changeTheme=()=>{
    this.setState({isDarkTheme:!this.state.isDarkTheme})
  }

  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state,changeTheme:this.changeTheme }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
