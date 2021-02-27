const CustomError = require("../extensions/custom-error");

module.exports=( disksNumber, turnsSpeed )=> {
let  turns=2**disksNumber-1,seconds=Math.floor(turns/(turnsSpeed/3600))
return {turns:turns,seconds:seconds}
}

