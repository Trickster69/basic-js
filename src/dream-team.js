const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    return members.filter((key) => typeof (key) == "string").map(key => key.trim().toUpperCase().slice(0, 1)).sort().join("");
  } else {
    return false;
  }


}