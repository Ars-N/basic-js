const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(nameArr) {
  return Array.isArray(nameArr)?nameArr.filter((a)=>typeof a==="string").map((a)=>a.trim().slice(0,1).toUpperCase()).sort().join(''):0
}