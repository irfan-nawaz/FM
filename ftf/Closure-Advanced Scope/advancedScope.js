const myAlert = () => {
  const x = "help! I think I found a clue";
  const alerter = () => {
    alert(x);
  };
  setTimeout(alerter, 1000);
  console.log("logged first");
};

myAlert();
