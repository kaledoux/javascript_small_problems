/* create functions for divisibility to extract logic
 * function divisible by 4
 * function divisible by 100
 * function divisible by 400 (both of the above)
 *
 * take number 
 * switch with cases
 * by 400 true break
 * by 100 false break
 * by 4 true break
 * default false
*/

function divisibleBy4(number) { 
  return number % 4 === 0;
}

function divisibleBy100(number) {
  return number % 100 === 0;
}

function divisibleBy400(number) {
  return number % 400 === 0;
}

function isLeapYear(year) {
  if (divisibleBy400(year)) {
    return true;
  } else if (divisibleBy100(year)) {
    return false;
  } else if (divisibleBy4(year)) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));
