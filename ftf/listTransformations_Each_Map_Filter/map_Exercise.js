const weapons = ["candle stick", "lead pipe", "revolver"];

const makeBroken = function (item) {
  return `broken ${item}`;
};

const brokenWeapons = _.map(weapons, makeBroken);

// Output:
// ['broken candle stick', 'broken lead pipe', 'broken revolver']

// each dosent return anything.
// map always returns an new array of same length.
// if we dont return anything in callback of map then it will return  array of undefined.