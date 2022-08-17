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

// Closure Demonstartion.
// Example-1
const newClue = (name) => {
  const length = name.length;

  return (weapon) => {
    let clue = length + weapon.length;
    return !!(clue % 1);
  };
};

const didGreenDoItWithA =  newClue('green');
didGreenDoItWithA("lead pipe"); //... so on  we can try with different names and weapons.