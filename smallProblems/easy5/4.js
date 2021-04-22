function centerOf(string) {
  const midPointEven = Math.floor((string.length / 2) - 1);
  const midPointOdd = Math.floor(string.length / 2);
  if (string.length % 2 === 0) {
    return string.slice(midPointEven, midPointEven + 2);
  } else {
    return string.slice(midPointOdd, midPointOdd + 1);
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
