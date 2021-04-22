function shift(array) {
  if (array.length < 1) { return undefined };

  let afterFirst = array.slice(1);
  let first = array[0];

  array.length = array.length - 1;
  for (let i = 0; i < afterFirst.length; i++) {
    array[i] = afterFirst[i];
  }
  return first;
}

/*
console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]
*/

/*
function unshift(array, ...additions) {
  let stackArray = [];
  additions.forEach(function(ele) {
    stackArray.push(ele);
  });

  console.log(stackArray);

  array.forEach(function(ele) {
    stackArray.push(ele);
  });

  console.log(stackArray);

  array.length = stackArray.length;
  for (let i = 0; i < array.length; i++) {
    array[i] = stackArray[i];
  }
  
  console.log(stackArray);

  console.log(array);

  return array.length; 
}
*/

function unshift(array, ...args) {
  for (let i = 0; i < args.length; i += 1) {
    array.splice(i , 0, args[i]);
  }

  return array.length;
}

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]
