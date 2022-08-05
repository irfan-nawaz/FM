Element.addEventListner("change", () => {
  console.log("our evidece is updated");
});

const newClue = (name) => {
  const length = name.length;

  return (weapon) => {
    let clue = length + weapon.length;
    return !!(clue % 1);
  };
};

// Callbacks

const ifElse = (condition, isTrue, isFalse) => {
  return condition ? isTrue() : isFalse();
};

var logTrue = () => {
  console.log(true);
};

var logFalse = () => {
  console.log(false);
};

ifElse(true, logTrue, logFalse);