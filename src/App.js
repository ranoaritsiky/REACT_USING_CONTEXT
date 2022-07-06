import React from 'react';
import TodoList from './Components/TodoList';

import ThemeContextProvider from './Contexts/ThemeContext';

function App() {
  return (
    <div className="App">
    <ThemeContextProvider>
      <TodoList/>

    </ThemeContextProvider>
    </div>
  );
}

export default App;
