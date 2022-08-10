let suspects = ["Miss Scarlet", "Colonel Mustard", "Mr White"];

let suspectsObjects = [];

function createSuspectObject(name) {
  return {
    name: name,
    color: name.split(" ")[1],
    speak() {
      console.log("my name is " + name);
    },
  };
}

// Map vs Each

let suspectsList = _.map(suspects, function (name) {
  return createSuspectObject(name);
});

// Output:
// [
  // {name: 'Miss Scarlet', color: 'Scarlet', speak: ƒ},
  // {name: 'Colonel Mustard', color: 'Mustard', speak: ƒ},
  // {name: 'Mr White', color: 'White', speak: ƒ}
// ]

_.each(suspectsList, function (suspect,i,l) {
  suspectsObjects.push(createSuspectObject(suspect.name))
  suspect.speak();
  suspectsObjects[i].speak();
});

// Output:
// my name is Miss Scarlet
// my name is Miss Scarlet
// my name is Colonel Mustard
// my name is Colonel Mustard
// my name is Mr White
// my name is Mr White
