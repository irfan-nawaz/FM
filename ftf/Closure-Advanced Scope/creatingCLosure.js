const myAlert = () => {
  const x = "help! I think I found a clue";
  let count = 0;
  const alerter = () => {
    alert(`${x} ${++count}`);
  };
  return alerter;
};

const funcAlert = myAlert();
const funcAlert2 = myAlert();

funcAlert();

const newClue = (name) => {
  const length = name.length;

  return (weapon) => {
    let clue = length + weapon.length;
    return !!(clue % 1);
  };
};

// ES5
function countClues() {
  var n = 0;
  return {
    count: function () {
      return ++n;
    },
    reset: function () {
      return (n = 0);
    },
  };
}

// ES6 equivalent

const countClues = () => {
  let n = 0;

  return {
    count: () => n++,
    reset: () => (n = 0),
  };
};
