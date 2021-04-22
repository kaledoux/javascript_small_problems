logValue();

function logValue() {
  console.log('Hello, world!');
}

/* This will log: 
 * Hello, world
 * Functions are hoisted as well, the function definition is hoisted with the function variable
 * so when logValue is called, the function works as needed.
 */

var logValue = 'foo';

function logValue() {
  console.log('Hello, world!');
}

console.log(typeof logValue);

/* This will log:
 * function
 * The var statment is hoisted to the top of the order with a value of undefined. The function 
 * declaration follows underneath, assigning the variable logValue to a function. But following 
 * this is the assignment of logValue to 'foo'.
 * The hoisted version would look like so:
 * var logValue // => logValue is undefined at this point
 *
 * function logValue ...
 *
 * logValue = 'foo'
 *
 * console.log(typeof logValue) // => string/
