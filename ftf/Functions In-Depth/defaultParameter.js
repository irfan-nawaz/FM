const add = function(a, b=2) {
  console.log(arguments);
  // longs only explicitly given arguments not the defuault ones.  
  return a+b;
  // returns a+2
}

add(3);
// output:
    // console.log(arguments) -> {0:3} -> gives a pseudo array & only explicit arguments are logged.
    // return a + b -> 3 + 2 -> 5. 

// in ES5 without default arguments.
const add2 = function(a, b) {
    b = b && 2;
    console.log(arguments);
    // longs only explicitly given arguments not the defuault ones.  
    return a+b;
    // returns a+2
  }