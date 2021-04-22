/*
 * start with a string
 * break the string into an array of characters
 * iterate through the array
 *  reduce the array such that each char is converted to its ascii with String.charCodeAt(0)
 * return the total
*/

function asciiValue(string) {
  if (string.length < 1) { return 0 };
  return string.split('').map( char => char.charCodeAt(0)).reduce((accu, val) => accu + val);
}

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));
