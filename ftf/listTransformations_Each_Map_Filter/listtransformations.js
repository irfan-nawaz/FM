// listTransformations:-
const game = {
  suspects: [
    {
      name: "Rusty",
      color: "black",
    },
    {
      name: "miss Scarlet",
      color: "red",
    },
  ],
};

// game.suspects = game["suspects"] = [{},{}].
// game[suspects] is undefined.

// Looping Exercise -1:-
function foo() {
  for (let i = 0; i < game.suspects.length; i++) {
    console.log(game.suspects[i].name);
  }
}

// executing (calling) the function:-
foo();

// Output:-
// Rusty
// miss Scarlet

// Looping Exercise -2:-
function bar() {
  for (let i = 0; i < game.suspects.length; i++) {
    if (game.suspects[i].color === "red") {
      console.log(game.suspects[i].name + " is guilty");
    } else {
      console.log("next-time");
    }
  }
}

// executing (calling) the function:-
bar();

// or

function bar2() {
  for (let i = 0; i < game.suspects.length; i++) {
    for (var key in game.suspects[i]) {
      if (game.suspects[i][key] === "red") {
        console.log("found-em");
      } else {
        console.log("next-time");
      }
    }
  }
}

// executing (calling) the function:-
bar2();

// Output:-

// ol

// il
// nt or fem

// il
// nt or fem

// ol

// il
// nt or fem

// il
// nt or fem

// Using Functions:-
// the createSuspectObject function returns a object.
// 1.
function createSuspectObjectES5(name) {
  return {
    name: name,
    color: name.split(" ")[1],
    // normal practise (old) by giving function name as key and declaring function as value.
    speak: function () {
      console.log("my name is " + name);
    },
  };
}

// 2.
function createSuspectObjectES6(name) {
  return {
    name: name,
    color: name.split(" ")[1],
    // ES6 new practise we can directly give functions as object key and call them as object.function() to execute and get value of key(function executed value)
    speak() {
      console.log("my name is " + name);
    },
  };
}

var suspects = ["Miss Scarlet", "Colnel Mustard", "Mr White"];

var sus = createSuspectObjectES6("miss Scarlet");

// Output:-
// sus.name === miss Scarlet
// sus.color === Scarlet
// sus.speak() === my name is miss Scarlet

// Note: the above createSuspectObject function is kind-of hydrating the suspects list of array into list of objects 
// hydrating is when we take a data and convert it into an object or a class.
// In javascript classes are functions that return objects.

// The hyderation is done in next slide using forEach