const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date_) {
  if (date_ === undefined)
    return "Unable to determine the time of year!"
  
  if (date_.getFullYear() !== new Date(Date.parse(date_.toString())).getFullYear())
    throw "THROWN"
  
  switch (date_.getMonth()) {
    case 11:
    case 0:
    case 1:
      return "winter";
      break;
    case 2:
    case 3:
    case 4:
      return "spring";
      break;
    case 5:
    case 6:
    case 7:
      return "summer";
      break;
    case 8:
    case 9:
    case 10:
      return "fall"
      break;
    default:
      return "Error";
  }
};
