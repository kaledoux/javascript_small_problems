function digitList(num) {
  let digits = [];
  do {
    let leftover = num % 10;
    digits.unshift(leftover);
    num -= leftover;
    num /= 10;
  } while (num > 0);
  return digits;
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]
