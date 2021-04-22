let a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);

/* This will log
 * [1, 2, 3]
 * Objects are mutable, so when b is initialized in the function body, it is pointed to the same
 * value to which a is pointed. So when the value inside is modified, it is reflected by a as well
 */
