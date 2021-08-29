import isEmpty from "is-empty";
import validator from "validator";

const ValidateLoginInput = (data) => {
  let errors = {};
  //convert empty fields to emty strings to apply validator functions
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  //email check
  if (validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  
  //password check
  if (validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};

export default ValidateLoginInput;
