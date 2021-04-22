var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar);

/* This will log:
 * This is global
 * The variable myVar is declared in the global scope first and the value assigned. The 
 * declaration inside function is limited to the scope of the function and creates a new local
 * variable in that scope.
 */

