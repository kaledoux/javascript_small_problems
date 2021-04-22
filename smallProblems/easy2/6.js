/* 
 * create an array that has a few different premade stories 
 *  the stories should have strings interpolated (stored as template literals)
 * 
 * import readline module and assign to variable
 *
 * declare for different variables (noun, verb, adj, adv)
 *
 * output to console a random element from array
*/


let rlSync = require('readline-sync');

let noun = rlSync.question('Enter a noun: ');
let verb = rlSync.question('Enter a verb: ');
let adj = rlSync.question('Enter an adjective: ');
let adv = rlSync.question('Enter an adverb: ');

const MadLibs = [`The ${adj} ${noun} ${adv} ${verb}!`,
                 `My ${adj} grandmother had a ${noun} that she ${adv} talked to. ${noun}`,
                 `The {$adj} ${noun} said you like to ${adv} ${verb}.`];

console.log(MadLibs[Math.floor(Math.random(2))]);
