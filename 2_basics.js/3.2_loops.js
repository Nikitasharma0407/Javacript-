// for loop:
for(let i=0 ; i<=10 ; i++){
    const element = i;  
    if(element==5){
        //console.log("5 is best number");
    }
   // console.log(element);
}
//  console.log(element);
for(let i=0 ; i<=10 ; i++){    // nested for loop
    //console.log((`Outer loop value: ${i}`))
    for(let j =0;j<=10 ; j++){
           //console.log(`inner loop value ${j} and inner loop ${i}`);
           //console.log(i + '*' + j + '=' + i*j );
    }
}
let myArray=["flash" , "batman", "superman"]
//console.log(myArray.length);
for(let i=0;i< myArray.length ; i++){
    const element=myArray[i];
   // console.log(element);
}

// break and continue
for(let i=0 ; i<=10 ; i++){
    const element = i;  
    if(element==5){
    console.log("detected 5");
    continue;
    }
    console.log(`value of i is : ${i}`);
}
for(let i=0 ; i<=10 ; i++){
    const element = i;  
    if(element==5){
    console.log("detected 5");
    break;//---> break statement
    }
    console.log(`value of i is : ${i}`);
}
for(let i=0 ; i<=10 ; i++){
    const element = i;  
    if(element==5){
    console.log("detected 5");
    continue;  // --> skip only for once
    }
    console.log(`value of i is : ${i}`);
}