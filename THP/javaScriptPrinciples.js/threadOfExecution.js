// defining a identifier, const num and assigining 3 to it.
const num = 3;

// defining a identifier, function multiplyBy2 and assigining the function body to it.
function multiplyBy2 (inputNumber){
    // first we store the argument in the paramerter.

    // defining a identifier, const result and assigining inputNumber*2 to it.
    const result = inputNumber*2;
    // now we return the result and exit out of the function.
    return result;
}

// defining a identifier const output, now initially it will be uninitialized, untill the value is returned by the function call, which will be stored finally into the identifier.
// but if we use let or var then initally it will be undefined and later be changed when the function call returns.
// as function call is a command we can't store commands in the identifier's memory.

// A function call is like running a mini program which again requires those three fundamental things thread of execution, call-Stack, and memory. For functions the memory is allocated in it's own local space called execution context which creatres a unique scope for the specific function call.
//  this execution context is unique to each function call and data from one function call's execution context can't be accessed in other function call's execution context for the same function.
// when the function is called the thread of execution weaves-in and weaves-out when the function is executed or returned. 
const output = multiplyBy2(num);

// same with this function call as well but only hear we have given default parameter.
const newOutput = multiplyBy2(10);

// Note: for const we can't just declare it a as uninitialized itentifier as it can't be changed if initialized.
// so for const the creating of identifier and initilazion of it both should be present.