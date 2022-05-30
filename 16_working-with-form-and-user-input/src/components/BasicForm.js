import useValidate from "../hooks/use-validate";

const BasicForm = (props) => {
  const {
    value: firstName,
    hasError: hasFirstNameError,
    onChange: onChangeFirstName,
    onBlur: onBlurFirstName,
    formControlClasses: firstNameFormControlClasses,
    reset: resetFirstName,
  } = useValidate((firstName) => firstName.trim() === "");
  const {
    value: lastName,
    hasError: hasLastNameError,
    onChange: onChangeLastName,
    onBlur: onBlurLastName,
    formControlClasses: lastNameFormControlClasses,
    reset: resetLastName,
  } = useValidate((lastName) => lastName.trim() === "");
  const {
    value: email,
    hasError: hasEmailError,
    onChange: onChangeEmail,
    onBlur: onBlurEmail,
    formControlClasses: emailFormControlClasses,
    reset: resetEmail,
  } = useValidate((email) => !email.includes("@"));

  const submitFormHandler = (event) => {
    event.preventDefault();

    console.log("Summited");

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const hasFormError = hasFirstNameError || hasLastNameError || hasEmailError;

  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div className={firstNameFormControlClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstName}
            onChange={onChangeFirstName}
            onBlur={onBlurFirstName}
          />
        </div>
        <div className={lastNameFormControlClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastName}
            onChange={onChangeLastName}
            onBlur={onBlurLastName}
          />
        </div>
      </div>
      <div className={emailFormControlClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={email}
          onChange={onChangeEmail}
          onBlur={onBlurEmail}
        />
      </div>
      <div className="form-actions">
        <button disabled={hasFormError}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
