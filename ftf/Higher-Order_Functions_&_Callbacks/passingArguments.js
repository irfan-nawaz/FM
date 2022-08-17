var increment = function (n) {
  return n + 1;
};

var square = function (n) {
  return n * n;
};

var doMathSoIDontHaveTo = function (n, func) {
  return func(n);
};

doMathSoIDontHaveTo(5, square);

doMathSoIDontHaveTo(4, increment);

// same above solution in ES6

var inc = (n) => {
  return n + 1;
};

var sqr = (n) => {
  return n * n;
};

var doMath = (n, fun) => {
  return fun(n);
};

// how to pass arguments to inner function? -> we can pass the arguments to HOF and use them in the inner function.

const ifElse = (condition, isTrue, isFalse, innerParm1, innerParm2) => {
  return condition ? isTrue(innerParm1) : isFalse(innerParm2);
};

ifElse(true, fn1, fn2, "hi", "bye");

const ifElse2 = (condition, isTrue, isFalse, ...args) => {
  return condition ? isTrue(...args) : isFalse(...args);
};

ifElse(true, fn1, fn2, "hi", "bye", "good morning", "see you again");

// here args will be ["hi", "bye", "good morning", "see you again"].

// es5
const ifElse3 = (condition, isTrue, isFalse) => {
  const args = [].slice.call(arguments,3)
  
  return condition ? isTrue.apply(this, args) : isFalse.apply(this, args);
};


const logTrue = (msgs) => { console.log(msgs); };
const logFalse = (msgs) => { console.log(msgs); };

ifElse3(true, logTrue, logFalse, 'a', 'b');