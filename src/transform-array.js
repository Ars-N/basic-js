module.exports=(arr)=> {if (Array.isArray(arr)){
    let mas=['--discard-next','--discard-prev','--double-prev','--double-next',]
    return  arr.filter((a,i,arr)=>{
        return arr[i-1]===mas[0]? false:1
    }).map((a,i,arr)=>{
        return a===mas[3] && i<arr.length-1? arr[i+1]:a
    }).filter((a,i,arr)=> {
        return arr[i + 1] === mas[1] ? false : 1
    }).map((a,i,arr)=>{
        return a===mas[2] &&i >0? arr[i-1]:a
    }).filter((a)=> !(mas.includes(a)))
}else throw new Error('Not implemented')
}
const CustomError = require("../extensions/custom-error");


