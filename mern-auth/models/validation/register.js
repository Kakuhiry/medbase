const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functionsk
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  data.phoneNumber = !isEmpty(data.phoneNumber) ? data.phoneNumber : "";
  data.birthdate = !isEmpty(data.birthdate) ? data.birthdate : "";
  data.direction1 = !isEmpty(data.direction1) ? data.direction1 : "";
  data.country = !isEmpty(data.country) ? data.country : "";

  // Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
// Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
// Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
  }
if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }
  if (Validator.isEmpty(data.phoneNumber)) {
    errors.phoneNumber = "phoneNumber field is required";
  }
  if (Validator.isEmpty(data.birthdate)) {
    errors.birthdate = "birthdate field is required";
  }
  if (Validator.isEmpty(data.direction1)) {
    errors.direction1 = "direction1 field is required";
  }
  if (Validator.isEmpty(data.country)) {
    errors.country = "Password field is required";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};