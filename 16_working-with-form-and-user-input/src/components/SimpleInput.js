import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputNameIsValid, setInputNameIsValid] = useState(false);
  const [inputNameTouched, setInputNameTouched] = useState(false);

  useEffect(() => {}, [inputNameIsValid]);

  const onchangeHandler = (event) => {
    setInputName(event.target.value);
    if (event.target.value.trim() !== "") {
      setInputNameIsValid(true);
    }
  };

  const onblurHandler = () => {
    setInputNameTouched(true);
    if (inputName.trim() === "") {
      setInputNameIsValid(false);
      return;
    }
  };

  const onSubmitHanlder = (event) => {
    event.preventDefault();
    setInputNameTouched(true);
    if (inputName.trim() === "") {
      setInputNameIsValid(false);
      return;
    }
    setInputName("");
  };

  const formControllClasses =
    !inputNameIsValid && inputNameTouched
      ? "form-control invalid"
      : "form-control";

  return (
    <form onSubmit={onSubmitHanlder}>
      <div className={formControllClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={onchangeHandler}
          onBlur={onblurHandler}
          value={inputName}
        />
        {!inputNameIsValid && inputNameTouched && (
          <p className="error-text">Input name cannot be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
