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

for (let i = 0; i < suspects.length; i++) {
  suspectsList[i] = createSuspectObject(suspects[i]);
}
// git

