const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == undefined) {
    return "Unable to determine the time of year!";
  } else if (isNaN(date.getTime())) {
    throw "Error";
  } else if (date instanceof Date) {
    let month = date.getMonth();
    if (month < 2 || month == 11) {
      return "winter";
    } else if (month < 5) {
      return "spring";
    } else if (month < 8) {
      return "summer";
    } else if (month < 11) {
      return "autumn";
    } else if (month == 0) {
      throw "Error";
    }
  }
};
