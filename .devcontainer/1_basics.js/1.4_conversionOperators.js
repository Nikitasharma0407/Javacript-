// let score="33abx"
console.log(typeof score);
console.log(typeof (score));
let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);  //NaN -> not an number
/*
"33"->33
"33abc"->NaN
true->1; false->0;
*/
let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
/*
1->true, 0->false
""->false
"nikita"->true
*/
let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);