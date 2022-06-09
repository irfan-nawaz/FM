// Destructuring varaibles let,var,const:

var first, second;

[first,second] = [true,false];

console.log("first: " + first);

console.log("second: " + second);

// To update or modify

first = false;

[first,second] = [true,true];

console.log("Mod_first: " + first);

console.log("Mod_second: " + second);



// Destructuring objects:

var obj = {
    first: 0,
    second: 1
};

var {first, second} = obj


console.log(first);



// Challlenge Problem

