/*
 * take string
 * create variable reverse 
 *  set equal to reverse of string
 *  iterate through string from length to 0 and add indexed letter
 * iterate through string again and compare values at index position to reverse
 *  return false if not equal, true if all match
 */

function isPalindrome(string) {
  let reverse = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== reverse[i]) { return false };
  }
  return true;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true
