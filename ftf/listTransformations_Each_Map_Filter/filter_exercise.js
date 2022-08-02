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

// Exercise data

const videoData = [
  {
    name: "Miss Scarlet",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Mrs. White",
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Reverend Green",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Rusty",
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Colonel Mustard",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Professor Plum",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
];

_.filter(videoData, function (suspectObject) {
  return suspectObject.present;
});
