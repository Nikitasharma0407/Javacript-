// object literals
const mySym= Symbol("key1")
const JsUser={
name:"Hitesh",
[mySym]:"myKey1",
age: 18,
location:"Jaipur",
isLoggedIn:true,
lastLoginDays: ["Monday", "Saturday"]
}
console.log(JsUser.age)
console.log(JsUser["name"])
console.log(JsUser.location)
console.log(typeof mySym)
console.log(JsUser[mySym])
 JsUser.name="histeshi"
 Object.freeze(JsUser)
 JsUser.name="rahul"
 console.log(JsUser);
 JsUser.greeting=function(){
    console.log("hello JS users");
 }
 JsUser.greetingtwo=function(){
    console.log(`hello JS users, ${this.name}`);
 }
 console.log(JsUser.greeting); 
 console.log(JsUser.greetingTwo)// not a function
