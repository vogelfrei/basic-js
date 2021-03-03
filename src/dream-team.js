const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if (!Array.isArray(arr) || arr === undefined)
    return false;
  let dt = arr.reduce((str, item) => { 
    if (typeof item === "string") {
      str += item.trim().slice(0, 1).toUpperCase();
    }
    return str;
  }, "");
  return dt.split("").sort().join("");
};
