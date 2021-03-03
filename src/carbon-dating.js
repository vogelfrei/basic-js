const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string" || sampleActivity === undefined || isNaN(sampleActivity) || String(Number(sampleActivity)).length !== sampleActivity.length)
    return false;
  if (Number(sampleActivity) < 0 || Number(sampleActivity) > MODERN_ACTIVITY)
    return false;
  if (Number(sampleActivity) === 0)
    return false;
  return Math.ceil(Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD));
};
