const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(rev) {
    if (rev === undefined) {
      this.rev = true;
    }
    else {
      this.rev = rev;
    }
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw "Error";
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let j_key = 0;
    let resstr = "";
    for (let i = 0; i < message.length; i++){
      if (message.codePointAt(i) > 64 && message.codePointAt(i) < 91) {
        if (j_key === key.length) {
          j_key = 0;
        }
        resstr += String.fromCodePoint(((message.codePointAt(i) + key.codePointAt(j_key)) % 26) + 65);
        j_key++;
      }
      else {
        resstr += message[i];
      }
    }
    return this.rev ? resstr : resstr.split("").reverse().join("");
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw "Error";
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let j_key = 0;
    let resstr = "";
    for (let i = 0; i < message.length; i++){
      if (message.codePointAt(i) > 64 && message.codePointAt(i) < 91) {
        if (j_key === key.length) {
          j_key = 0;
        }
        resstr += String.fromCodePoint(((message.codePointAt(i) + 26 - key.codePointAt(j_key)) % 26) + 65);
        j_key++;
      }
      else {
        resstr += message[i];
      }
    }
    return this.rev ? resstr : resstr.split("").reverse().join("");
  }
}
module.exports = VigenereCipheringMachine;
