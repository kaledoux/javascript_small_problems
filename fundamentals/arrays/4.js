function concat(arr, ...addValue) {
  let newArr = arr;
  addValue.forEach(function(value) {
    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        newArr.push(value[i]);
      }
    } else {
      newArr.push(value);
    }
  });
  return newArr;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));
