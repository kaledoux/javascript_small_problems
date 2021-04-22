function isRealPalindrome(string) {
  let trueString = string.split('').map(function(char) {
  if (/[a-zA-Z0-9]/.test(char)) { 
      return char.toLowerCase(); 
    } else {
      return '';
    }
  });

  return trueString.join('') === trueString.reverse().join('');
}


console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false
