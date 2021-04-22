function runningTotal(numbers) {
  if (numbers === []) { return numbers };

  let runningArray = [];
  let currentValue = 0;
  for (let i = 0; i < numbers.length; i++) {
    currentValue += numbers[i];
    runningArray.push(currentValue);
  }
  return runningArray;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
