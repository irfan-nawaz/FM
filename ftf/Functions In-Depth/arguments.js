// before spread or rest operator we had to rely on "arguments" keyword to find out all the arguments.

// Note arrow function dosent have arguments keyword.

const createTuple2 = function (a, b, c, ...d) {
console.log(arguments);
// logs {"it", "be", "could", "anyone", "no one", hello} -> pseudo array
return [
[a, c],
[b, d],
];
// returns // [['it', 'could'],['be','anyone']]
};

createTuple2("it", "be", "could", "anyone", "no one","hello");
// Output:-
// logs - Arguments(6) ['it', 'be', 'could', 'anyone', 'no one', 'hello', callee: ƒ, Symbol(Symbol.iterator): ƒ]
// returns - [['it', 'could'],['be',['anyone', 'no one', 'hello']]]