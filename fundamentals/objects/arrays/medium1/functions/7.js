let a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);

/* This will log:
 *  7
 *  A new local variable by the name a is created when the function myValue is called. The outer
 *  scoped variable a is not modified (its a primitive) or reassigned. 
 */
