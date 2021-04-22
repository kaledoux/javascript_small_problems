/* readline sync 
 * set variable age to first question
 * set variable retirement to second question
 * set currentYear to year now
 * set yearToGo to retirement - age
 * set retirmentYear to currentYear plus yearsToGo 
 * console log with values
*/

let rlSync = require('readline-sync');

let age = rlSync.questionInt('What is your age? ');
let retirement = rlSync.questionInt('At what age do you want to retire? ');

let currentYear = new Date().getFullYear();
let yearsToGo = retirement - age;
let retirementYear = currentYear + yearsToGo;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}. \n
You have only ${yearsToGo} years of work to go!`);


