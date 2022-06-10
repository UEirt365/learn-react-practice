import React, { useContext } from "react";
import { TodoContext } from "../store/todo-context";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const todoCtx = useContext(TodoContext);
  return (
    <ul className={classes.todos}>
      {todoCtx.todos.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todoCtx.removeTodoHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
