import "./RegistrationForm.modul.css";
import useInput from "./../hooks/use-input";

const RegistrationForm = () => {
  const validatefirstName = (value) => {
    const regExp = new RegExp("(?<first_letter>[A-Z]{1})(?<body>[a-z]{1,25})$");
    return regExp.exec(value) != null;
  };

  const validateLastName = (value) => {
    const regExp = new RegExp("(?<first_letter>[A-Z]{1})(?<body>[a-z]{1,25})$");
    return regExp.exec(value) != null;
  };

  const validateEmail = (value) => {
    return value.includes("@");
  };

  const firstNameInput = useInput(validatefirstName);
  const lastNameInput = useInput(validateLastName);
  const emailInput = useInput(validateEmail);
  
  const isFormValid =
    firstNameInput.isValid && lastNameInput.isValid && emailInput.isValid;

  const onSubmit = () => {
    console.log("OnSubmit")
  }

  const onClick = (event) => {
    event.preventDefault();
    console.log("OnClick")
  }

  return (
    <>
      <form className="registration-form" onSubmit={onSubmit}>
        <div className="registration-form__child">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            onBlur={firstNameInput.onBlurChange}
            onChange={firstNameInput.onValueChange}
          />
          {firstNameInput.hasError && <small>Enter valid first name</small>}
        </div>
        <div className="registration-form__child">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            onBlur={lastNameInput.onBlurChange}
            onChange={lastNameInput.onValueChange}
          />
          {lastNameInput.hasError && <small>Enter valid last name</small>}
        </div>
        <div className="registration-form__child">
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            onBlur={emailInput.onBlurChange}
            onChange={emailInput.onValueChange}
          />
          {emailInput.hasError && <small>Enter valid email</small>}
        </div>
        <div className="registration-form__child">
          <input type="submit" id="email" value="Register" disabled={!isFormValid}  />
        </div>
      </form>
    </>
  );
};

export default RegistrationForm;
