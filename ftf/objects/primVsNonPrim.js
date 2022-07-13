var tst = [];
tst[0] = "hola";
console.log(tst[0]);

function test(tst) {
    tst[0] = "amigos";
}
test(tst);
console.log(tst[0]);


var prim = "sting"
//here the value of prim is "string"

function test(prim) {
    prim = "i'm a primitive DS";
    console.log(prim);
    // in this function the value of prim is "i'm a primitive DS".
}
test(prim)

prim = "now im changing my value by creating new memory block"
// here the value of prim is changed and new memory for prim is created instead of modifying the initial one and the this value will be followed from hear-onwards but the old value will be followed till the above code. 

console.log(prim);

// But in case of Non-primitive as they are passed by refrence if the refrence is changed once then the value of such non-primitive variable is changed in the entire code and we might get different results if we run the code again.
