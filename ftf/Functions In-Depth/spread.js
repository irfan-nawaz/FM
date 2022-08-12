// Tupule is a datastrucuture that has  collection of arrays that have two values.
const createTuple = (a, b, c, ...d) => {
    // spread copies the present and remaining values into an array.
    return [
      [a, c],
      [b, d],
    ];
  };
  
  createTuple("it", "be", "could", "anyone", "no one");
  
  // Output:-
  // [['it', 'could'],['be',['anyone', 'no one']]]