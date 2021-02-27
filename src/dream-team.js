const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(nameArr) {
  return Array.isArray(nameArr)?nameArr.filter((a)=>typeof a==="string").map((a)=>a.trim().slice(0,1).toUpperCase()).sort().join(''):0
}


let exp = (nameArr)=> {

  Array.isArray(nameArr)?nameArr.filter((a)=>typeof a==="string").map((a)=>(a.slice(0,1))).join(''):0
}
let nameArr=['Olivia', 1111, 'Lily', 'Oscar', true, null]
exp(nameArr)