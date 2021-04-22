function union(arr1, arr2) {
  let unionArray = [];
  for (let i = 0; i < arr1.length; i++) {
    let val1 = arr1[i];
    let val2 = arr2[i];
    if (!unionArray.includes(val1)) { unionArray.push(val1) };
    if (!unionArray.includes(val2)) { unionArray.push(val2) };
  }
  return unionArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));


