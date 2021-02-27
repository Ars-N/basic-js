const CustomError = require("../extensions/custom-error");

module.exports = (date)=>{
  if (Object.prototype.toString.call(date) === '[object Date]'){
    date=date.getUTCMonth()
    let a=[0,1,11],b=[2,3,4],c=[5,6,7],d=[8,9,10],inc=(arg)=>arg.includes(date)
    return inc(a)?'winter':inc(b)?'spring':inc(c)?'summer':inc(d)?'autumn':'Unable to determine the time of year!'}
  else throw new CustomError('Not implemented')
}

