let rlSync = require('readline-sync');

let bill = parseInt(rlSync.question('What is the bill?', { limit: [/\d/] }));
let tip  = parseInt(rlSync.question('What percentage is the tip?', { limit: [/\d/] }));

let calculatedTip = bill * (tip / 100);
let total = bill + calculatedTip;

console.log(`The tip is $${calculatedTip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);

