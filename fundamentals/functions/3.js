var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);

/* This will log:
 * This is local
 * When the function someFunction is called on line 7, the code on line 4 is executed. The JS engine looks for a variable to resolve for myVar locally and does not find one, so it moves to the next 
 * containing scope, which in this case is global. The myVar variable is defined here so JS uses it
 * and the code on line 4 acts as a reassignment for the globally scoped variable. 
 */

