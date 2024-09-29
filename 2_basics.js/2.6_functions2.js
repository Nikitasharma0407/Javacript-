//function calculateCarPrice(...num1){ // rest operator or spread operator 
function calculateCarPrice(val1,val2,...num1){
return num1;
}
console.log(calculateCarPrice(200,400,500,600))
const user={
    username:"nikita",
    price:99
}
function handleObj(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
//handleObj(user)
handleObj({
    username:"sam",
    price:99
})
const myNewArray=[200,300,400,500]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500]));
