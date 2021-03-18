const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === "string" && sampleActivity != undefined &&sampleActivity < MODERN_ACTIVITY && +sampleActivity > 0) {
    let time =
      Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD);
    return Math.ceil(time);
  } else {
    return false;
  }
}
