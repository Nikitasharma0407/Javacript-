//Immediately invoked function expression(IIFE)
(function chai(){ // named IIFE
    console.log(`DB Connected`);
})();   // to remove pollution of global scope we use IIFE
((name)=>{ // un-named IIFE
    console.log(`DB connected two ${name}`);
}) ('nikita')