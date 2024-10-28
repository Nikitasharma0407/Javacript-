const user={
    username:"Nikita",
    age:20,
    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`);
       // console.log(this); // give current context(details)
    }
}
user.welcomeMessage()
user.username="Sam"
user.welcomeMessage()
function chai(){
    console.log(this.username);// undefined
}
chai()
// const chai=function(){
//     let username="nikita"
//     console.log(this);  // error
    
// }
// const chai=()=>{
//     let username="nikita"
//     console.log(this);  // error
    
// }
chai()
const addTwo=(num1,num2)=>{ //  pure arrow function
    return num1+num2
}
console.log(addTwo(2,3))
const addTwo=(num1,num2)=>(num1+num2)
console.log(addTwo(6,3))