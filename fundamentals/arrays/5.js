function pop(arr) {
  if (arr.length < 1) { return undefined };
  
  let popValue = arr[arr.length - 1];

  arr.length = arr.length - 1;
  return popValue;
}

const array1 = [1, 2, 3];
console.log(pop(array1));                        // 3
console.log(array1);                // [1, 2]
console.log(pop([]));                           // undefined
console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]

function push(arr, ...items) {
  if (items === undefined) { return arr.length }
  items.forEach(function(element) {
    arr[arr.length] = element;
  });
  return arr.length;
}

const array2 = [1, 2, 3];
console.log(push(array2, 4, 5, 6));              // 6
console.log(array2);                // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));                          // 0
