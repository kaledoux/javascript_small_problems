let a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);

/* This will log:
 * 7
 * When a function is defined, its parameters create new local variables in its scope.
 * So, when a is passed in as an argument to the myValue call, the local variable b is created
 * and assigned to the value of a.
 */
