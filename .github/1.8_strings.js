const name="nikita"
const repoCount=50
//console.log(name + repoCount + "value"); outdated and not preferred
console.log(`Hello I am ${name} and my repo count is ${repoCount}`)
const gameName= new String('nikitaS')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));
const newString=gameName.substring(0,4)
console.log(newString)
const anotherString= gameName.slice(-8,4)
console.log(anotherString)
const newStringOne="  nikita  "
console.log(newStringOne)
console.log(newStringOne.trim());