function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);

/* This will log:
 * This is global
 * The declaration on line 2 is done without a keyword so JS initialized it on the global scope. 
 */

