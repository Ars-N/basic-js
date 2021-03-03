const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth=(arr,i)=> {  i===undefined?i=1:false
    if (arr.some((a) => Array.isArray(a))) {i++
        return this.calculateDepth(arr.flat(),i)
    } else return i
  }
}
