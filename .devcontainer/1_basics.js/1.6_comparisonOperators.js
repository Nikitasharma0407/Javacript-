console.log(null>0)
console.log(null==0)
console.log(null>=0)
console.log(undefined>0)// always false
console.log("2">0)
console.log("02">0)
console.log("2"===2) // strict check  which also check the data type
   /// all these will create lots of confusion so avoid these ..
   /*
  Datat types:- Primitive and Non - Primitive
  1. Primitive:- 7 types:
  String , Number, Boolean , null , undefined, Symbol, BigInt

  2. Non-Primitive : Reference
  array , objects , functions -> data type : functions
 Q1: Is javascript a statically typed or dynamically typed language?
 ANS:JavaScript is a dynamically typed language. This means that variables in JavaScript do not have a fixed type, and the type of a variable is determined at runtime, not at compile time. You can assign a value of any type to a variable, and you can change the type later by assigning a different type of value to the same variable.


   */

 const outsideTemp=null;
 let userEmail;
 const id =Symbol('123')
 const anotherID=Symbol('123')
 console.log(id==anotherID);  // values are equal butb they different

 const heroes =["shaktiman","naagraj","doga"];
 let myObj= {
    name:"nikita",
    age: 21,
 }
 const myfunc=function(){ // data type - object function
    console.log("Hello world");
 }
 //console.log(typeof id );