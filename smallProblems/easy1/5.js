// Write a program that asks the user to enter an integer greater than 0, then asks if the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

/* first we need to require the readline sync module for text import
 * 
 * declare a variable to the answer of the first prompt
 *  input check this prompt to be either 's' or 'p'
 * if answer was 's'
 *  declare variable 'sum' and set it to the sum of all previous numbers
 *  n * (n+1) / 2
 * otherwise
 *  declare variable 'product' and set it to the product of all previous numbers
 *  recursive function defined outside of conditional
 * 
 * if sum 
 * console log sum statement with interpolated values
 * else 
 * console log product with interpolated values
*/

function factorial(number) {
  if (number === 1) { return 1 } 
  return number * factorial(number -1);
}

let rlSync = require('readline-sync');

let number = parseInt(rlSync.question('Please enter a number greater than 0: ',
                              {limit: /\d/}));

let choice = rlSync.question('Enter \'s\' to compute the sum, or ' + 
                             '\'p\' to compute the product. ',
                             {limit: ['s', 'p'],
                              limitMessage: 'Please choose \'s\' or \'p\', case sensitive.'});

let total = 0;
let operation = '';

if (choice === 's') {
  total = (number * (number + 1)) / 2;
  operation = 'sum';
} else {
  total = factorial(number);
  operation = 'product';
}

console.log(`The ${operation} of the integers between 1 and ${number} is ${total}`);


