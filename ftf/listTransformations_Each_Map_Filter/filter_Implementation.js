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

_.filter = function (arr, cb) {
  // create an array
  let array = [];
  // loop through array
  _.each(arr, function (v, i, list) {
    // check if cb returns true
    if (cb(v, i, list)) {
      // if true push into the array
      array.push(v);
    }
  });
  // return array
  return array;
};

_.filter([1, 2, 3, 4, 5], function (v, i, list) {
  if (v > 2) {
    return true;
  } else {
    return false;
  }
});
