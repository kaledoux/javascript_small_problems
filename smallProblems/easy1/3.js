// let rlSync = require('readline-sync');
// 
// let length = parseInt(rlSync.question('Enter the length of the room in meters:'));
// let width  = parseInt(rlSync.question('Enter the width of the room in meters:'));
// 
// let squareMeters = length * width;
// let squareFeet = squareMeters * 10.7639;
// 
// console.log(`The area of the room is ${squareMeters} square meters (${squareFeet} square feet)`);


// Further


let rlSync = require('readline-sync');

let choice = rlSync.question('What measurement would you prefer? Enter \'meters\' or \'feet\': ');
let length = parseInt(rlSync.question('Enter the length of the room in meters: '));
let width  = parseInt(rlSync.question('Enter the width of the room in meters: '));

let squareMeters = length * width;
let squareFeet = squareMeters * 10.7639;

if (choice === 'meters') {
console.log(`The area of the room is ${squareMeters} square meters`);
} else if (choice === 'feet') {
console.log(`The area of the room is ${squareFeet} square feet`);
} else {
console.log(`Invalid measurement type. Here is in feet: ${squareFeet}`);
}

