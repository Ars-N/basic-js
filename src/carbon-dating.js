const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
//!isNaN(n)
module.exports=(n)=>{if (typeof n==='string'){ n=Number(n)
return  n&&n<15&& n>0? Math.ceil(Math.log(15/n)/(0.693/5730)):0}
else return 0}

//n=parseInt(n)
//!20<n && n?console.log(Math.ceil(Math.log(15/n)/(0.693/5730))):0
