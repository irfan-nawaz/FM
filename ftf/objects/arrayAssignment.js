var person = [];

person[0] = "hola";

var plea = "wouldShe";

person.name = "mrs. white";

// Case 1:

person[plea] = "i would never";

// now to access plea from array person we can do it in 2 ways

console.log(person[plea]);

console.log(person.wouldShe);

// Case 2:

person["plea"] = "i would never"; // == [person.plea = "i would never"]

// now to access plea from array person we can do it in 2 ways

console.log(person.plea);

console.log(person["plea"]);

console.log("");

// Note: we can only use dot notation in arrays with non-numbers as it will auto convert to string but in case of numbers we cannot use them in dot notation as it will give sintaxError.

// ex: - array.0  => is wrong.
//     - array[0] => is correct.

// console.log(person.0);   // Wrong
// console.log(person."0"); // Wrong

console.log(person[0]); // Correct
console.log(person["0"]); // Correct
