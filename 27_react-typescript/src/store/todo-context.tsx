import React, { ReactNode, useState } from "react";
import Todo from "../models/Todo";

type TodoContextObj = {
  todos: Todo[];
  addTodoHandler: (text: string) => void;
  removeTodoHandler: (id: string) => void;
};

export const TodoContext = React.createContext<TodoContextObj>({
  todos: [],
  addTodoHandler: (text: string) => {},
  removeTodoHandler: (id: string) => {},
});

const TodoProvider: React.FC<{ children: ReactNode }> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);

    setTodos((prevTodos) => {
      return [...prevTodos, newTodo];
    });
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const contextValue: TodoContextObj = {
    todos,
    addTodoHandler,
    removeTodoHandler,
  };
  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
