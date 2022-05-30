import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: inputName,
    hasError: inputNameHasError,
    onchangeHandler: onchangeNameHandler,
    onblurHandler: onblurNameHandler,
    formControllClasses: formControllNameClasses,
    reset: resetInputName,
  } = useInput((inputName) => inputName.trim() !== "");

  const {
    value: email,
    hasError: emailHasError,
    onchangeHandler: onchangeEmailHandler,
    onblurHandler: onblurEmailHandler,
    formControllClasses: formControllEmailClasses,
    reset: resetEmail,
  } = useInput((email) => email.includes("@"));

  const hasFormError = inputNameHasError || emailHasError;

  const onSubmitHanlder = (event) => {
    event.preventDefault();
    console.log("SUMMITED");
    resetInputName();
    resetEmail();
  };

  return (
    <form onSubmit={onSubmitHanlder}>
      <div className={formControllNameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={onchangeNameHandler}
          onBlur={onblurNameHandler}
          value={inputName}
        />
        {inputNameHasError && (
          <p className="error-text">Input name cannot be empty!</p>
        )}
      </div>
      <div className={formControllEmailClasses}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          onChange={onchangeEmailHandler}
          onBlur={onblurEmailHandler}
          value={email}
        />
        {emailHasError && <p className="error-text">Email is invalid!</p>}
      </div>
      <div className="form-actions">
        <button disabled={hasFormError}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
