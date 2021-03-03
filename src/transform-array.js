const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr))
    throw "THROWN";
  let outarr = [];
  outarr = arr.reduce((outarr, item) => {
    outarr.push(item);
    return outarr;
  }, []);
  for (let i = 0; i < outarr.length; i++) {
    switch (outarr[i]) {
      case "--discard-next":
        if (i !== outarr.length - 1) {
          if (outarr[i + 1] !== "--discard-next" && outarr[i + 1] !== "--discard-prev" && outarr[i + 1] !== "--double-next" && outarr[i + 1] !== "--double-prev") {
            outarr.splice(i + 1, 1);
          }
        }
        break;
      case "--discard-prev":
        if (i !== 0) {
          if (outarr[i - 1] !== "--discard-next" && outarr[i - 1] !== "--discard-prev" && outarr[i - 1] !== "--double-next" && outarr[i - 1] !== "--double-prev") {
            outarr.splice(i - 1, 1);
          }
        }
        break;
      case "--double-next":
        if (i !== outarr.length - 1) {
          if (outarr[i + 1] !== "--discard-next" && outarr[i + 1] !== "--discard-prev" && outarr[i + 1] !== "--double-next" && outarr[i + 1] !== "--double-prev") {
            outarr.splice(i + 1, 0, outarr[i + 1]);
          }
        }
        break;
      case "--double-prev":
        if (i !== 0) {
          if (outarr[i - 1] !== "--discard-next" && outarr[i - 1] !== "--discard-prev" && outarr[i - 1] !== "--double-next" && outarr[i - 1] !== "--double-prev") {
            outarr.splice(i + 1, 0, outarr[i - 1]);
          }
        }
        break;
    }
  }

  for (let i = 0; i < outarr.length; i++){
    if (outarr[i] === "--discard-next" || outarr[i] === "--discard-prev" || outarr[i] === "--double-next" || outarr[i] === "--double-prev") {
      outarr.splice(i, 1);
      i--;
    }
  }

  return outarr;
};
