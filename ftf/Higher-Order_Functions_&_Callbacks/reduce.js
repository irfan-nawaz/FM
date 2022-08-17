// array
const list = [1, 2, 3, 4, 5];

const sum = list.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

// object
_.reduce(
  { a: 1, b: 2, c: 1 },
  function (accumulator, value, key) {
    (accumulator[value] || (accumulator[value] = [])).push(key);
    return result;
  },
  {}
);
// {1:['a', 'c'], 2: ['b']}

// reduce implementation
let _ = {};

_.reduce = function (list, cb, initial) {
  let accumulator = initial;
  // loop through list
  for (let i = 0; i < list.length; i++) {
    if(i === 0 && accumulator === undefined) {
      accumulator = list[0];
    } else {
      // call the callback with accumulator and initial(arr[i])
      // save the return value from the callback.
      accumulator = cb(list[i], accumulator)
    }
  }
  // return result
  return accumulator;
};