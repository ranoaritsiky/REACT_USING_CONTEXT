import React from "react";
import TodoList from "./Components/TodoList";
import Navbar from './Components/Navbar'

import ThemeContextProvider from './Contexts/ThemeContext'


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>

      <TodoList/>
      </ThemeContextProvider>
      <Navbar/>
    </div>
  );
}

export default App;
