// Method-2 using _.each method
_.each(suspects, function (name) {
  let suspectObj = createSuspectObject(name);
  suspectsList.push(suspectObj);
});

// or

_.each(suspects, function (name) {
  suspectsList.push(createSuspectObject(name));
});