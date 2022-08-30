function copyArrayAndMultiplyBy2(array) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
    }
    return output;
}
const myArray = [1,2,3];
var result = copyArrayAndMultiplyBy2(myArray);

// The above can only copy and multiply the array but if we want to perform different operation than multiplication like division/addition we need to re-write this function again with required functionality so we are agian breaking the priciple of DRY

// so we can use callback functions to dynamically add the functionality during the execution.

function copyArrayAndManipulate(array, instructions) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
    }
    return output;
   }
function multiplyBy2(input) { return input * 2; }
const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);

// In the above function we need not decide in waht way we need to mainpulate array untill we call the function, we can give the maipulation functionality using the callbacks.

// note: the global data passed as arguments into the functions are saved in the functions exacution-context as link to the actual data in global context, they are not copied or duplicated. 
// so they are refrenced to the original data but not actually create a copy of the original data in their scope or execution context.