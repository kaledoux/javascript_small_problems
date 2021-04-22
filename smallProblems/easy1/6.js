//Write a function that takes two strings as arguments, determines the longer of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

/* require readline module 
 * two variables set with question, no validation for string
 * declare two variables shortWord and longWord
 * if the length of word one is shorter than word two set shortWord to word one and
 *   longWord to word two
 * then log shortWord longWord shortWord to the console
*/

function shortLongShort(wordOne, wordTwo) {
  let shortWord = ''
  let longWord  = ''
  
  if (wordOne.length < wordTwo.length) {
    shortWord = wordOne;
    longWord  = wordTwo;
  } else {
    shortWord = wordTwo;
    longWord  = wordOne;
  }

  return shortWord + longWord + shortWord;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));  
