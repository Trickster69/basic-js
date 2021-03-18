const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.map(key => key.filter(key => key == "^^").join(" ")).join("").split(" ").join("").length/2
};
