const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let c = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let b = 0; b < matrix[i].length; b++) {
      if (matrix[i][b] == "^^") {
        c++;
      }
    }
  }
  return c;
};
