/*One of the ways to manage the flow of a program is through the use of conditionals. Go over the code below and specify how many unique execution paths are possible.*/

if (condition1) {
  // ...
  if (condition2) {
    // ...
  } else {
    // ...
  }
} else {
  // ...
  if (condition4) {
    // ...
    if (condition5) {
    // ...
    }
  }
}

There are five total possible conditional execution paths. 
  Condition 1 true condition2 true
  condition1 true condition2 false (else)
  condition1 false
  condition1 false condition4 true condition5 true
  condition1 false condition4 true condition5 false 
