/*Write a function that takes a string of digits, and returns the appropriate number as an integer. The string may have a leading + or - sign; if the first character is a +, your function should return a positive number; if it is a -, your function should return a negative number. If there is no sign, return a positive number.*/

function stringToInteger(stringNumber) {
  return +stringNumber;
}

console.log(stringToInteger('4321'));      
console.log(stringToInteger('-570'));
console.log(stringToInteger('+570'));
