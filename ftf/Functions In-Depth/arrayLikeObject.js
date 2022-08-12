// Pseudo Array(Array like object): 
// - A pseudo array is like an array like object, so it is fundamentally an object with numerical indices.
// - It has length method from array but no other native array methods are present in Pseudo Array(Array like object).
// - to convert a pseudo array into a native array we can use two approaches.
    // - ES5(old)
        // - Array.prototype.slice.call(PseudoArray)
    // - ES6(new)
        // -Array.from(PseudoArray)

// Es5 old practise to use (Array.prototype.slice.call())
const constructor = function () {
  const arr = Array.prototype.slice.call(arguments);
  // arr = ["was", "it", "in"]
  arr.push("the billiards room?");
  // arr = ["was", "it", "in", "the billiards room?"]
  return arr.join(" ");
  // returns "was it in the billiards room?" string
};
constructor("was", "it", "in"); // output: "was it in the billiards room?"

// New ES6 practise to use (Array.from())
const constructor2 = function () {
  const arr = Array.from(arguments);
  // arr = ["was", "it", "in"]
  arr.push("the billiards room?");
  // arr = ["was", "it", "in", "the billiards room?"]
  return arr.join(" ");
  // returns "was it in the billiards room?" string
};
constructor2("was", "it", "in"); // output: "was it in the billiards room?"

// Exerxercise Implement _.from()
const from = (arr) => {
  return Array.prototype.slice.call(arr);
};
