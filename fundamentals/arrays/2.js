// In the previous exercise, the value of the reference gets copied. For this exercise, only the values of the array should be copied, but not the reference. Implement two alternative ways of doing this.

// Here is the code from the previous exercise:

let myArray = [1, 2, 3, 4];
// method 1 - use values and static method to create
// const myOtherArray = Array.from(myArray.values());
// method 2 - map it
const myOtherArray = myArray.map(ele => ele);

// const myOtherArray = myArray;

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);
