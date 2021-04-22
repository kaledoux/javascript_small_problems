var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();

/* This will log
 * This is local
 * The invocation on line 8 of someFunction() will execute the cod in lines 
 * 4 and 5. Inside the function someFunction() a local scope is created during execution. 
 * The variable myVar that is declared during this function's execution is in this local scope. 
 * When we log the variable myVar, the JS engine will first search the local scope to resolve the
 * name, and it finds the local variable that was initialized. This local variable shadows the 
 * outer (globally) scoped myVar, so its value is logged.
 */
