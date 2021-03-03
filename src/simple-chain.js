const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    return this.chain.length
  },
  addLink(value) {if (!this.chain){this.chain=[]}
    isNaN(value)||value===0||value||value===null||value===false?
        this.chain.push(`( ${value} )`) :this.chain.push(`( )`)
    return this
  },
  removeLink(pos) { if ((pos^0)===pos){
    this.chain.splice(pos-1,1)
    return this} else {this.chain.splice(0,Infinity)
    throw new Error("")}
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {let a=this.chain.join("~~")
    this.chain.splice(0,Infinity)
    return (a)
  }
}
module.exports = chainMaker;
