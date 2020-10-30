const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str,{ repeatTimes = 1, separator = "+", addition = "", additionRepeatTimes = 1, additionSeparator = "|" } ) {
  const string = str + "";
  let repAddition = string + ((addition + additionSeparator).repeat(additionRepeatTimes-1)) + addition;
  return (repAddition + separator).repeat(repeatTimes-1) + repAddition;
};
  