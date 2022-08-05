// array
const list = [1, 2, 3, 4, 5];

const sum = list.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

// object
_.reduce(
  { a: 1, b: 2, c: 1 },
  function (result, value, key) {
    (result[value] || (result[value] = [])).push(key);
    return result;
  },
  {}
);
// {1:['a', 'c'], 2: ['b']}

// reduce implementation
let _ = {};

_.reduce = function (list, cb, initial) {
  initial = initial || list[i];
  // loop through list
  for (let i = 0; i < list.length; i++) {
    // call the callback with accumulator and initial(arr[i])
    result = cb(list[i], result);
  }
  return result;
  // save the return value from the callback.
  // return result
};
