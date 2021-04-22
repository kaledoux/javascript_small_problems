function countOccurrences(arr) {
  let occurrences = {};
  for (let i = 0; i < arr.length; i++) {
    if (occurrences[arr[i]] !== undefined) {
      occurrences[arr[i]] += 1;
    } else {
      occurrences[arr[i]] = 1;
    }
  }
  Object.keys(occurrences).forEach(key => console.log(`${key} => ${occurrences[key]}`));
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);
