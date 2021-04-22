/*
 * to find fibonacci number
 * for number
 *  if 1 
 *  return 1
 *  if 2
 *  return 1
 *  else
 *  return   fibonacci of number - 2 + fibonacci of number - 1
*/

function nthFib(number) {
  if (number === 0) {
    return 0;
  } else if (number === 1) {
    return 1;
  } else if (number === 2) {
    return 1;
  } else {
    return nthFib(number - 2) + nthFib(number - 1);
  }
}

/*
function nthFib(number, fibsArray) {
  let fibs = {};

  if (number === 0) { return 0 };
  if (number === 1) { return 1 };
  if (fibsArray[number] > 0) { return fibsArray[number] }; 
  
  fibsArray[number] = nthFib(number - 1, fibsArray) + nthFib(number - 2, fibsArray);
  return fibsArray[n];
}
*/

function findFibonacciIndexByLength(digits) {
  let first = 1;
  let second = 1;
  let index = 2;
  let fibonnaci;
  
  do {
    fibonacci = first + second;
    index += 1;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < digits);

  return index;
}

console.log(nthFib(0));
console.log(nthFib(1));
console.log(nthFib(2));
console.log(nthFib(3));
console.log(nthFib(4));
console.log(nthFib(5));

console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));  
