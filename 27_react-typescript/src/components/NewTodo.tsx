import { FormEvent, useContext, useRef } from "react";
import { TodoContext } from "../store/todo-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const textRef = useRef<HTMLInputElement>(null);

  const todoCtx = useContext(TodoContext);

  const submitHanlder = (event: FormEvent) => {
    event.preventDefault();

    const enteredText = textRef.current!.value;

    if (enteredText.trim().length === 0) {
      //throw Error
      return;
    }

    todoCtx.addTodoHandler(enteredText);
  };
  return (
    <form className={classes.form} onSubmit={submitHanlder}>
      <label htmlFor="text">Todo text:</label>
      <input type="text" id="text" ref={textRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
