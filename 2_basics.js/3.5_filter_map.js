// const coding=["JS","Ruby","Java","Python"]
// const values=coding.forEach((item)=>{
// //console.log(item);
// //return item
// })
// console.log(values);

const myNums=[1,2,3,4,5,6,7,8,9,10]
//  const newNums=myNums.filter((num)=>num>4)
//  console.log((newNums));
//  const new =myNUms.filter((num)=>
// {
//     return num>4
// })
// console.log(new)
 const newNums=[]
 myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
 }
)
// console.log(newNums);
const mynum=[1,2,3,4,5,6,7,8,9]
//  const number=num.map(()=>{ return num + 10})
//  console.log(number)

// CHAINING
const num =mynum.map((num)=>num*10)
                .map((num)=> num+1)
                .filter((num)=>num>=40)
                console.log(num)
const numbers=[12,13,14]
//  const myTotal=numbers.reduce(function(acc,currval){
   
//    console.log(`acc:${acc} and currval:${currval}`)
//     return acc+currval
//  },0)        
const myTotal=numbers.reduce((acc,curr)=>acc+curr,0)
 console.log(myTotal)  

const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"python course",
        price:3999
    },
    {
        itemName:"Data Scientist course",
        price:12999
    },
]
 const priceToPay=shoppingCart.reduce((acc,item)=> acc+item.price,0)
 console.log(priceToPay)
