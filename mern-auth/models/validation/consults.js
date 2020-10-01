const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateConsultInput(data) {
  let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
  data.userID = !isEmpty(data.userID) ? data.userID : "";
  data.doctorID = !isEmpty(data.doctorID) ? data.doctorID : "";
  data.hospital = !isEmpty(data.hospital) ? data.hospital : "";
  data.doctor = !isEmpty(data.doctor) ? data.doctor : "";
  data.reason = !isEmpty(data.reason) ? data.reason : "";
  data.patient = !isEmpty(data.patient) ? data.patient : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  data.recipes = !isEmpty(data.recipes) ? data.recipes : "";
  data.symptoms = !isEmpty(data.symptoms) ? data.symptoms : "";

  // Name checks
  if (Validator.isEmpty(data.userID)) {
    errors.userID = "user ID field is required";
  }
  if (Validator.isEmpty(data.doctorID)) {
    errors.doctorID = "doctor ID field is required";
  }
  if (Validator.isEmpty(data.hospital)) {
    errors.hospital = "Hospital name field is required";
  }
  // Email checks
  if (Validator.isEmpty(data.doctor)) {
    errors.doctor = "Doctor field is required";
  }
  // Password checks
  if (Validator.isEmpty(data.patient)) {
    errors.patient = "Patient field is required";
  }

  if (Validator.isEmpty(data.reason)) {
    errors.reason = "reason field is required";
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = "Description field is required";
  }

  if (Validator.isEmpty(data.recipes)) {
    errors.recipes = "recipes field is required";
  }

  if (Validator.isEmpty(data.symptoms)) {
    errors.symptoms = "symptoms field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
