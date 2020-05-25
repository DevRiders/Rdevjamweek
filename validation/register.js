const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  // console.log(data.userData.username);
  // console.log(data.userData.password);
    let errors = {};

    data.userInfo.name = !isEmpty(data.userInfo.name) ? data.userInfo.name : "";
    data.userInfo.des = !isEmpty(data.userInfo.des) ? data.userInfo.des : "";

    if (Validator.isEmpty(data.userInfo.name)) {
      errors.username = "Name is required.";
    }

    if (Validator.isEmpty(data.userInfo.des)) {
      errors.password = "Designation is Required.";
    }

    return {
      errors,
      isValid: isEmpty(errors)
    };
  };