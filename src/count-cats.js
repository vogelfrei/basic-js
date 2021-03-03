const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arrcats) {
  let count = arrcats.reduce((cCats, item) => {
    cCats += item.reduce((c, i) => { i === "^^" ? c++ : c; return c; }, 0);
    return cCats;
  }, 0);
  return count !== 0 ? count : 0; 
};
