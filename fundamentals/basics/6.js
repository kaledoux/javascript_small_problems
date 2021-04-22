/*In this exercise, you will write a program that asks the user for a phrase, then outputs the number of characters in that phrase.*/

let rlSync = require('readline-sync');

let phrase = rlSync.question('What is your phrase? ');

console.log(`There are ${phrase.length} characters in ${phrase}`);
