const CustomError = require("../extensions/custom-error");
module.exports = (arr) =>{return arr.flat().filter((a)=>a==='^^').length}