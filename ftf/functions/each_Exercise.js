let suspects = ["Miss Scarlet", "Colonel Mustard", "Mr White"];

let suspectsList = [];

function createSuspectObject(name) {
  return {
    name: name,
    color: name.split(" ")[1],
    speak() {
      console.log("my name is " + name);
    },
  };
}

// Method-1 normal looping
for (let i = 0; i < suspects.length; i++) {
  suspectsList[i] = createSuspectObject(suspects[i]);
}

// or

for (let i = 0; i < suspects.length; i++) {
  let suspect = createSuspectObject(suspects[i]);
  suspectsList.push(suspect);
}

// Method-2 using _.each method
_.each(suspects, function (name) {
  let suspectObj = createSuspectObject(name);
  suspectsList.push(suspectObj);
});

// or

_.each(suspects, function (name) {
  suspectsList.push(createSuspectObject(name));
});

// Note the difference between _.each and forEach

// For _.each we have to give an array and callback function which will called on every list item

// Where as forEach is a method on an array which takes a callback function.
