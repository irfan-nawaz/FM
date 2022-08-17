const consider = (name) => {
  return `I think it could be... ${name}`;
};

const exclaim = (statement) => {
  return `${statement.toUpperCase()}`;
};

const blame = _.compose(consider, exclaim);

blame("you");
// 'I think it could be... YOU'

// firtst exclaim is invoked;
// return of exclaim is passed as argument to consider.
// now filnally consider will be invokled with argument.

// implementation:
const compose  = (fn,fn2) => {
  return (arg) => {
    const result = fn2(arg);
    return fn(result);
  }
}