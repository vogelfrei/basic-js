const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (str === undefined) {
    return "";
  }

  let str1 = "";  
  "repeatTimes" in options ? rt = options.repeatTimes : rt = 0;
  "separator" in options ? sep = String(options.separator) : sep = "+";
  "addition" in options ? addi = String(options.addition) : addi = "";
  "additionRepeatTimes" in options ? addrt = options.additionRepeatTimes : addrt = 0;
  "additionSeparator" in options ? addsep = String(options.additionSeparator) : addsep = "|";

  do {
    str1 += String(str);

    let i = addrt;

    if (addi !== "") {
      do {
        str1 += addi;

        i > 0 ? i-- : i = 0;

        if (i !== 0) {
          str1 += addsep;
        }
        
      } while (i !== 0)
    }
    
    rt > 0 ? rt-- : rt = 0;

    if (rt !== 0) {
      str1 += sep;
    }

  } while (rt !== 0)

  return str1;
};
  