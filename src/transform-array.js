const CustomError = require("../extensions/custom-error");

module.exports=(arr)=> {if (Array.isArray(arr)){

}else throw new CustomError('Not implemented')
}
