/* if the arg is even
 *  divide by 2 and repeat '10' that many times
 * if odd
 *  subtract by 1 and divide by 2 
 *  repeat '10' that many time but add '1' to the end
*/

function stringy(number) {
  if (number % 2 === 0) {
    return '10'.repeat(number / 2);
  } else {
    return `${'10'.repeat((number -1) / 2)}1`;
  }
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));
console.log(stringy(1));
console.log(stringy(0));
