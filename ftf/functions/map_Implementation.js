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

// map using simple looping
_.map = function (list, callback) {
    // create an empty array to retuen it finally
    var storage = [];
    // looping
    for (let i = 0; i < list.length; i++) {
      // callback(element)
      // push it to the array
      storage.push(callback(list[i], i, list));
    }
    // return array
    return storage;
  };

// map using _.each
_.map = function (list, callback) {
  // create an empty array to retuen it finally
  var storage = [];
  // looping
  _.each(list, function (v, i, list) {
    // callback(element)
    // push it to the array
    storage.push(callback(v, i, list));
  });
  // return array
  return storage;
};

_.map([1, 2, 3], function (val) {
  return val + 1;
});
