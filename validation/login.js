const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
  // console.log(data.userData.username);
  // console.log(data.userData.password);
    let errors = {};

    data.userData.username = !isEmpty(data.userData.username) ? data.userData.username : "";
    data.userData.password = !isEmpty(data.userData.password) ? data.userData.password : "";

    if (Validator.isEmpty(data.userData.username)) {
      errors.username = "Username field is required";
    }

    if (Validator.isEmpty(data.userData.password)) {
      errors.password = "Password field is required";
    }

    return {
      errors,
      isValid: isEmpty(errors)
    };
  };