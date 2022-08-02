const _ = {};

_.each = function (list, callback) {
  if (Array.isArray(list)) {
    // loop through array
    for (var i = 0; i < list.length; i++) {
      // call the callback with a list item
      callback(list[i], i, list);
    }
  } else {
    // loop through object
    for (var key in list) {
      // call the callback with list item
      callback(list[key], key, list);
    }
  }
  // celebrate
};

_.each(["sally", "gerorgie", "rusty"], function (name, i, list) {
  if (list[i + 1]) {
    console.log(name, "is younger than" + list[i + 1]);
  } else {
    console.log(name, "is oldest");
  }
});
