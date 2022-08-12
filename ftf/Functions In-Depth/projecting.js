// Projecting is taking a value out of a data structure and turn into another data structure.
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

// Filter
let filterArray = _.filter(videoData, function (suspectObject) {
  return suspectObject.present;
});

// Output:-
// [
  // {name: 'Miss Scarlet', present: true, rooms: Array(6)}
  // {name: 'Reverend Green', present: true, rooms: Array(6)}
  // {name: 'Colonel Mustard', present: true, rooms: Array(6)}
  // {name: 'Professor Plum', present: true, rooms: Array(6)}}
// ]

// Map
let proj = _.map(
  _.filter(videoData, function (suspectObject) {
    return suspectObject.present;
  }),
  function (filteredObject) {
    return filteredObject.name;
  }
);

// Output:-
// ['Miss Scarlet', 'Reverend Green', 'Colonel Mustard', 'Professor Plum']
