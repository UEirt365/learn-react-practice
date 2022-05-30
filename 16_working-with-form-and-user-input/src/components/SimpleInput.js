import { useState } from "react";

const SimpleInput = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputNameTouched, setInputNameTouched] = useState(false);

  const inputNameIsValid = inputName.trim() !== "";

  const formIsValid = inputNameIsValid;

  const onchangeHandler = (event) => {
    setInputName(event.target.value);
  };

  const onblurHandler = () => {
    setInputNameTouched(true);
  };

  const onSubmitHanlder = (event) => {
    event.preventDefault();
    setInputNameTouched(true);
    if (inputName.trim() === "") {
      return;
    }
    setInputName("");
    setInputNameTouched(false);
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
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
