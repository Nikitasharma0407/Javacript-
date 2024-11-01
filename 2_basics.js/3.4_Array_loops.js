 // for of loop

//  ["","",""]
//  [{},{},{}]
 const arr=[1,2,3,4,5]
 for(const num of arr){
    console.log(num);
 }
 const greetings="Hello world!"
 for(const great of greetings){
    console.log(`Each char is ${great}`)
 }
 // Maps
 const map =new Map()
 map.set('IN',"India")
 map.set('USA',"United States of America")
 map.set('Fr',"France")
 map.set('IN',"India")
//  console.log(map)
for(const [key,value] of map){
   console.log(key,':-',value);
}
// const myObject={
//    'game1': 'NFS',
//    'game2':'Spiderman'
// }
// for(const[key,value] of myObject){// not iterable 
//    console.log(key,':-',value);
// }
const myObject={
   js:'javascript',
   cpp:'c++',
   rb: "ruby",
   swift:"swift in apple"
}
for(const key in myObject ){
   //if(Object.hasOwnProperty.call(object,key)){
      // const element=object[key];
      console.log(myObject[key]);
      console.log(`${key} shortcut is for ${myObject[key]}`)

   }
   const programming =["Js","rb","py","java","cpp"]
   for(const key in programming){
      console.log(programming[key]);
   }
 const coding =["js","ruby","java","python","cpp"]
// coding.forEach(function(val) {
//    console.log(val)

// })
//  coding.forEach( (item) => {
//    console.log(item);
//  })
coding.forEach((item,index,arr)=>{
   console.log(item,index,arr);
})
const myCoding =[
{
   languageName:"Javascript",
   languageFileName:"js"
}
]
myCoding.forEach((item)=>{
   console.log(item.languageName);
})
