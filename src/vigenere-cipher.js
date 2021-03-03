const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(bool=true) {
    this.bool=bool
  }
  encrypt(str, key) {if (str===undefined || key===undefined){ throw new Error('Not')}
    let vig='abcdefghijklmnopqrstuvwxyz',i=0,result
    this.bool===false?str=str.split('').reverse().join('').toLowerCase():0
    str=str.toLowerCase()
    key=key.toLowerCase()
    if (str.length>key.length){key=key.repeat(Math.ceil(str.length/key.length))}
    result= str.split('').map((a)=>{
      if (vig.includes(a)) {
        if (vig.includes(key.charAt(i))) {
          let num = vig.indexOf(a) + vig.indexOf(key.charAt(i))
          i = i + 1
          return 25 < num ? vig.charAt(num - 26) : vig.charAt(num)
        }else i++;return a
      }else return a
    })
    return result.join('').toUpperCase()
  }
  decrypt(str, keys) {if (str===undefined || keys===undefined){ throw new Error('Not')}
    let vig='ABCDEFGHIJKLMNOPQRSTUVWXYZ', i=0, result
    keys=keys.toUpperCase()
    str=str.toUpperCase()
    this.bool===false?str=str.split('').reverse().join(''):0
    if (str.length>keys.length){keys=keys.repeat(Math.ceil(str.length/keys.length))}
    result=str.split('').map((a)=>{
      if (vig.includes(a)) {
        if (vig.includes(keys.charAt(i))) {
          let num = vig.indexOf(a) - vig.indexOf(keys.charAt(i))
          i = i + 1
          return 0 > num ? vig.charAt(num + 26) : vig.charAt(num)
        }else i++; return a
      }else return a
    })
    return result.join('')
  }
}
module.exports = VigenereCipheringMachine;