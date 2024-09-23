const accountId=14678 // cannot be changed
let accountEmail="nikitasharma040702@gmail.com"
var accountPassword="12345"  // not generally used because of block scope and functional issue
accountCity="Delhi"
let accountState;   // undefined

accountEmail="NS@gmail.com"
accountPassword="57578557"
accountCity="Mumbai"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])