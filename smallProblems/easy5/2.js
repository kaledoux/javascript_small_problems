function doubleConsonants(string) {
  let doubled = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i].match(/[bcdfghjklmnpqrstvwxy]/)) {
      doubled += string[i] + string[i];
    } else {
      doubled += string[i];
    }
  }
  return doubled;
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""
