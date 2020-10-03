const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterDoctorInput(data) {
  let errorsD = {};
  // Convert empty fields to an empty string so we can use validator functions
  data.workingHospital = !isEmpty(data.workingHospital)
    ? data.workingHospital
    : "";
  // Name checks
  if (Validator.isEmpty(data.workingHospital)) {
    errorsD.workingHospital = "Working hospital is required";
  }
  return {
    errorsD,
    isValidD: isEmpty(errorsD),
  };
};
