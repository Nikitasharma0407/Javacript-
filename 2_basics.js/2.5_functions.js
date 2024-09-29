function sayMyName(){
    console.log("N")
    console.log("I")
    console.log("K")
    console.log("I")
    console.log("T")
    console.log("A")
}
sayMyName()
function addTwoNumbers(number1,number2){
    //let result=number1+number2
//console.log(number1+number2)
//return result;
return number1+number2;

}
 const result = addTwoNumbers(3,14)
 console.log("result:",result);
addTwoNumbers(3,"4") // datatype must be same
addTwoNumbers(3,null)

function loginUserMesg(username ="sam"){
    //if(!username){
    if(username== undefined){
        console.log("Please enter the username")
        return
}
    return `${username} just logged in`

}
//console.log(loginUserMesg("nikita"))
console.log(loginUserMesg()) // undefined if value is not mentioned