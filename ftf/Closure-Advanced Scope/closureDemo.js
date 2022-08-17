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
  
  // Output:-
  var counter = countClues();
  counter.count(); // 1
  counter.count(); // 2
  counter.reset(); // 0
  
  // ES6 equivalent
  
  const countClues = () => {
    let n = 0;
  
    return {
      count: () => n++,
      reset: () => (n = 0),
    };
  };