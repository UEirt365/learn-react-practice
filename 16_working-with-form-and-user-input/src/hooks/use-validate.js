import { useState } from "react";

const useValidate = (validateFunction) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const hasError = validateFunction(value) && isTouched;

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onBlur = (event) => {
    setIsTouched(true);
  };

  let formControlClasses = "form-control";
  if (hasError) {
    formControlClasses += " invalid";
  }

  const reset = () => {
    setValue("");
    setIsTouched(false);
  };

  return {
    value,
    hasError,
    onChange,
    onBlur,
    formControlClasses,
    reset,
  };
};

export default useValidate;
