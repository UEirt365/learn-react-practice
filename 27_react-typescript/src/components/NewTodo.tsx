import { FormEvent, useRef } from "react";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const textRef = useRef<HTMLInputElement>(null);

  const submitHanlder = (event: FormEvent) => {
    event.preventDefault();

    const enteredText = textRef.current!.value;

    if (enteredText.trim().length === 0) {
      //throw Error
      return;
    }

    props.onAddTodo(enteredText);
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
