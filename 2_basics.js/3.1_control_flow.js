// const temp=42
// if(temp<50){
//     console.log("less than 50");

// }else{
//      console.log("greater than 50")
// }
// const score=200
// if(score>100){
//  let power="fly"
//     console.log(`user power:${power}`);
// }
// console.log(`user power:${power}`);

// const balance =1000
// if(balance>500)
//     console.log("test")  
// switch case:
const month=3
switch(month){
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break; 
    case 3:
        console.log("march");
        break;  
    case 4:
        console.log("april");
        break;         
    default:
        break;    
}   // value added in string is always true

// Nullish coalescing operator(??): null undefined
let val1;
// val1=5??10--->5 // checks the safety of null
// val1=null??10--->10
val1=undefined??10//--->undefined
console.log(val1);
//ternary operator
//condition ? true :false
const price=100
price>=80 ? console.log("greater"):console.log("lesser")