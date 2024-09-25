//array
/*1. js arrays are resizable.
  2. index starts from 0
  3. js arrays are not associative, elements cannot be accessed using arbitrary string as indexes but ,must be accessed using non neg integers
  4. copy  array operation - shallow copies(share same reference point)

*/
const arr=[0,1,2,3,4,5]
console.log(arr[0])
const MyArray=new Array(2,2,3,4,6)
console.log(MyArray[3])
// Array methods
arr.push(6)
arr.push(8)
arr.pop()
arr.unshift(4)// insert at the beginning of the array
arr.shift()
console.log(arr.includes(9))
console.log(arr.indexOf(9))
const array=arr.join() // data type will change to string
console.log(arr)
console.log(typeof array)
console.log(arr)

// slice , splice
console.log("A",arr)
const myN1=arr.slice(1,4)
console.log(myN1)
console.log("B", arr)
const myN2=arr.splice(1,4)// it includes range  and portion is removed
console.log(myN2)

const A1=["3","4","5"]
const A2=["0","1","2"]
//A1.push(A2[1])
console.log(A1)
 const output=A1.concat(A2) // to combine both arrays
console.log(output)
// spread operator -> used to separarte all the elements from 2 arr
const op=[...A1,...A2]
console.log(op)
const anotherArr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realArr=anotherArr.flat(Infinity)  // flatten all the elements of the array 
console.log(realArr)
console.log(Array.isArray("nikita"))
console.log(Array.from({name:"nikita"}))
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2.score3))// return set of element to include in the new array obj



