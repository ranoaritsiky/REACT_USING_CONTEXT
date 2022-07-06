import React from "react";

import { ThemeContext } from "../Contexts/ThemeContext";

export default class TodoList extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          const { isDarkTheme, lightTheme, darkTheme,changeTheme } = context;
          const theme = isDarkTheme ? darkTheme : lightTheme;

          return (
            <div
              className="card"
              style={{ background: theme.background, color: theme.textcolor,width:"18rem" }}
            >
              <img
                className="card-img-top"
                src=""
                alt="Card cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button onClick={changeTheme}>here</button>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
