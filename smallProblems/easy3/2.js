/* First include module for readline to use prompts
 * create array that contains counters (1st, 2nd, 3rd, etc)
 * set a new variable equal to array literal
 * for each prompt (1-5), add value to array
 * for 6th prompt, set to new variable
 * check if value is in array with includes
 * create new variable for verb, base this on ternary conditional for inclusion in array
 * log sentence
 */

let rlSync = require('readline-sync');
let questionNumber = ['1st', '2nd', '3rd', '4th', '5th'];
let values = [];

for (let i = 0; i < questionNumber.length; i++) {
  values.push(rlSync.questionInt(`Enter the ${questionNumber[i]} number: `));
}

let lastValue = rlSync.questionInt('Enter the last number: ');

let verb = '';
values.includes(lastValue) ? verb = 'does appear' : verb = 'does not appear';

console.log(`The number ${lastValue} ${verb} in [${values}].`);



