// Code Snippet 1

var counter = 5;
var rate = 3;
console.log('The total value is ' + String(counter * rate));

function counter(count) {
  // ...
}

// the total value is 15; function is reassigned
// Code Snippet 2

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

var counter = 5;
var rate = 3;
// the total value is NaN; var rate is hoisted but is set to undefined. 

// Code Snippet 3

var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

//normal output; reassignment comes before console.

// Code Snippet 4

let counter = 5;
let rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

// error, variable is already defined.
