const createTuple = (a, b, c, ...d) => {
  return [
    [a, c],
    [b, d],
  ];
};

createTuple("it", "be", "could", "anyone", "no one");

// output
// [['it', 'could'],['be',['anyone', 'no one']]]

// before spread or rest operator we had to rely on "arguments" keyword to do the same stuff.

const createTuple2 = (a, b, c, d) => {
  console.log(arguments);
  // logs {"it", "be", "could", "anyone", "no one"} -> pseudo array
  return [
    [a, c],
    [b, d],
  ];
  // returns // [['it', 'could'],['be','anyone']] 
};