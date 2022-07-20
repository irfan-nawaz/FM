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

// Exercise -3
