function interleave(arr1, arr2) {
  let interArray = [];
  for (let i = 0; i < arr1.length; i++) {
    interArray.push(arr1[i], arr2[i]);
  }
  return interArray;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));
