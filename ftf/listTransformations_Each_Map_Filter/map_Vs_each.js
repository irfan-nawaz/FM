let suspects = ["Miss Scarlet", "Colonel Mustard", "Mr White"];

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

_.each(suspectsList, function (suspect) {
  suspect.speak();
});
