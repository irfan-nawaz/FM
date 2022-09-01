// The future belongs to those who believe in the beauty of their dreams.
function createFunction() {
  function multiplyBy2(num) {
    return num * 2;
  }
  return multiplyBy2;
}
// the above function returns a function.
const generatedFunc = createFunction();
// in the above generatedFunc identifier we call the HOF which will return an another function,
// but as multiplyBy2 is returned into generatedFunc which is in global scope that function will still live as generatedFunc.
// now the function multiplyBy2 is returned into generatedFunc and the HOF execution context is deleted i.e multiplyBy2 is gone,
// here multiplyBy 2 was only refrencing to the inner function body which is stored in some other memory place, now after the execution of HOF it's refrence will be deleted but not the actual function which is stored in some other place.
// but while returning the inner function the varaible storing the return will have new refrence to the inner function body which is stored in some other memory place. 
// so now the function is still accessable.
// hear the intresting part is how we will be able to still access the variable environment of HOF even after its execution?
    // Ans: while creating a function we have some hidden propertiers created along with it one of such hidden peroperty is called "[[scope]]" this stores all the variable environment of HOF.
const result = generatedFunc(3); // 6

function outer () {
    let counter = 0;
    function increment () {
        counter++;
    }
    return increment;
}

var count = outer();

count();