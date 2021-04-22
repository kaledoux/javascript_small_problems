var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();

/* This will log:
 * This is global
 * The function someFunction has access to the global scope; in this scope myVar was defined, so 
 * the call to console.log inside the function will have access to it as well
 */
