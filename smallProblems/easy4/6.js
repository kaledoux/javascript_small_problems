function showMultiplicativeAverage(arr) {
  let total = arr.reduce((accu, current) => accu * current);
  console.log((total / arr.length).toFixed(3));
}

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"
