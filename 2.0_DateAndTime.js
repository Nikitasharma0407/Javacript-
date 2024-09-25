// date- JS Date objects represent a single moment in time in a platform independent format
//API-Temporal- this is a proposal for temporal , a global object that acts as top level namespace
let myDate=new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof  myDate)  // object
let createDate= new Date(2024,0,28)  // in js month is started from 0
console.log(createDate.toDateString())
console.log(createDate.toLocaleString())
 let createMyDate=new Date("2024-01-14") // DD-MM-YY-> month is started from 1.
 console.log(createMyDate.toString())
 console.log(createMyDate.toDateString())
 console.log(createMyDate.toLocaleString())

 let myTimeStamp=Date.now()
 console.log(myTimeStamp)
 console.log(createMyDate.getTime()) // in mili seconds
 console.log(Math.floor(Date.now()/1000))

 let newDate=new Date()
 console.log(newDate)
 console.log(newDate.getMonth()+1) //from 0
 console.log(newDate.getDay())// started from monday
 newDate.toLocaleString('default',{
    
   weekday:"long"

 })
 


