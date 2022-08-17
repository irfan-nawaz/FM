// (i) Initally we have declared a function that takes three arguments and return the array of those three arguments.  
var abc = function (a, b, c) {
  return [a, b, c];
};

// (ii) Now we are passing that function to currying method 
var curried = _.curry(abc);

// what currying method does is it takes a function as input and enables us to semicall curry method multiple times, untill it has recieved all the arguments mentioned in the input function parameters and execute the internal function finally.

// here in this example we semi call function "_.curry"   
    // 1st time with "1" as the 1st argument
    // 2nd time with "2" as the 2nd argument
    // 3rd time with "3" as the 3rd argument
// finally all three parameters are fuillfilled as arguments to the curried function call so now the internal function abc will be called with all three parameters.  
curried(1)(2)(3);

curried(1, 2)(3);


// implemntation
const curry = (fn) => {
  return (arg) => {
    return (arg2) => {
      return fn(arg, arg2);
    }
  }
}

var curried2 = curry(fn);

curried2(arg)(arg2);