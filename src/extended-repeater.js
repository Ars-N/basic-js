const CustomError = require("../extensions/custom-error");
module.exports=(str, options)=>{
  let {repeatTimes,separator,addition,additionRepeatTimes,additionSeparator}=options
  if (typeof str=== 'object'){str=str+''}
  if (typeof addition=== 'object'){addition=addition+''}
  str!==null?str=str.toString():str='null'
  if (addition===undefined){addition=''}
  if (repeatTimes===undefined){repeatTimes=1}
  if (additionRepeatTimes===undefined){additionRepeatTimes=1}
  addition!==null?addition=addition.toString():0
  separator===undefined?separator='+':0
  additionSeparator ===undefined?additionSeparator ='|':0

  let arr=[],
      recurs=(i)=>{
        if (i>0){
          arr.push(addition)
          if (i-1>0){
            arr.push(additionSeparator)
          }
          i--
          recurs(i)
        }
      },
      recurs2=(i)=>{
        if (i>0){
          arr.push(str)
          recurs(additionRepeatTimes)
          if (i-1>0){
            arr.push(separator)
          }
          i--
          recurs2(i)
        }
      }
  recurs2(repeatTimes)
  return arr.length>1?arr.reduce((a,b)=>a.concat(b)):arr.toString()
}

