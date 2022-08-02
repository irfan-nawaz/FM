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

// Exercise -1

function foo() {
  for (let i = 0; i < game.suspects.length; i++) {
    console.log(game.suspects[i].name);
  }
}

// Exercise -2

function bar() {
  for (let i = 0; i < game.suspects.length; i++) {
    if (game.suspects[i].color === "red") {
      console.log(game.suspects[i].name + " is guilty");
    } else {
      console.log("next-time");
    }
  }
}

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

// Exercise -3

// NOTE:

// 1.
function createSuspectObject(name) {
  return {
    name: name,
    color: name.split(" ")[1],
    // normal practise (old)
    speak: function () {
      console.log("my name is " + name);
    },
  };
}

// 2.
function createSuspectObject(name) {
  return {
    name: name,
    color: name.split(" ")[1],
    // ES6 new practise we can directly give functions as object key and call them as object.function() to execute and get value of key(function executed value)
    speak() {
      console.log("my name is " + name);
    },
  };
}
