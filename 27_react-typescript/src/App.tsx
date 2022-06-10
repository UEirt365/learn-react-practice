import React from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodoProvider from "./store/todo-context";

function App() {
  return (
    <TodoProvider>
      <NewTodo />
      <Todos />
    </TodoProvider>
  );
}

export default App;
