import React from "react";
import './App.css';
import Todo from "./components/Todo";
import InProgress from "./components/TodoProgress";
import TodoDone from "./components/TodoDone";

function App() {
  return (
    <div className="App">
      <Todo />
      <InProgress />
      <TodoDone />
    </div>
  );
}

export default App;
