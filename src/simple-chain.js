const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chn : [],
  getLength() {
    return this.chn.length;
  },
  addLink(value) {
    value !== undefined ? this.chn.push("( " + String(value) + " )") : this.chn.push("(  )");
    return this;
  },
  removeLink(position) {
    if (typeof position !== "number" || position < 0 || position % 1 === 1 || this.getLength() < position) {
      this.chn.splice(0, this.getLength());
      throw "Error";
    }
      
    this.chn.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chn.reverse();
    return this;
  },
  finishChain() {
    let str = this.getLength() > 0 ? this.chn.join("~~") : "";
    this.chn.splice(0, this.getLength());
    return str;
  }
};

module.exports = chainMaker;
