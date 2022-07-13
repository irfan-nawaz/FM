var tst = [];
tst[0] = "hola";
console.log(tst[0]);

function test(tst) {
    tst[0] = "amigos";
}
test(tst);
console.log(tst[0]);


var prim = "sting"

function test(prim) {
    prim = "i'm a primitive DS";
    console.log(prim);
}
test(prim)

console.log(prim);