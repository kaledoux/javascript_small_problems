function reverseNumber(num) {
  let digits = [];
  do {
    let leftover = num % 10;
    digits.unshift(leftover);
    num -= leftover;
    num /= 10;
  } while (num > 0);
  return parseInt(digits.reverse().join(''));
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that zeros get dropped!
console.log(reverseNumber(1));        // 1
