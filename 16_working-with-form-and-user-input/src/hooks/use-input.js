import { useState } from "react";

const useInput = (validateInput) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateInput(value);
  const hasError = !valueIsValid && isTouched;

  const onchangeHandler = (event) => {
    setValue(event.target.value);
  };

  const onblurHandler = () => {
    setIsTouched(true);
  };

  const formControllClasses = hasError
    ? "form-control invalid"
    : "form-control";

  const reset = () => {
    setValue("");
    setIsTouched(false);
  };

  return {
    value,
    hasError,
    onchangeHandler,
    onblurHandler,
    formControllClasses,
    reset,
  };
};

export default useInput;
