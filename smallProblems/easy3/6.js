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

function isPalindromicNumber(number) {
   return isRealPalindrome(String(number));
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));  
