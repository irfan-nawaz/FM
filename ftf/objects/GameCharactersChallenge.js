// Create an object using bracket and dot notation that represents the characteristics and related data you may find in a game of Clue

var game = {};

game.murderer = "??";

game["weapons"] = [
    {type: 'lasers' , location:"lab"},
    {type: 'cats' , location:"home"},
    {type: 'dish soap' , location:"kitchen"}
]

game.name = [];
game.name[0] = 'Miss Scarlet';
game.name.push('Mr Green');
