/* start with a string that contains some doubled letters
 * guard clause; if the string has length 0, return ''
 * declare another variable to hold the return value
 * iterate through the string character by character
 *  if this is the first letter, add it to the holder
 *  else if the letter is the same as the letter at string[index - 1]
 *    continue
 * after iteration, return the holder value
*/

function crunch(string) {
  if (string.length < 1) { return ''};
  let crunchedWord = '';
  for (let index = 0; index < string.length; index++) {
    if (index === 0) {
      crunchedWord += string[index];
    } else {
      if (string[index] !== string[index - 1]) { crunchedWord += string[index] };
    }
  }
  return crunchedWord;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));  
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));  
