// default paramaters are the parameters which are assigned with the predefined value while creating the function and they are passed with that default assigned value as it's argument, if no new argument is given inplace of the parameters's default value.

// in the below function b = 2; is a default parameter.

const add = function(a, b=2) {
  console.log(arguments);
  // The arguments keyword longs only explicitly given arguments not the defuault ones. So it basically cares about the arguments not what is there in parameters.
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