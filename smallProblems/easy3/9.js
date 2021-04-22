function wordSizes(words) {
  let counter = {};
  let splitWords = words.split(' ');
  for (let i = 0; i < splitWords.length; i++) {
    let size = splitWords[i].length;
    if (counter[size] === undefined) {
      counter[size] = 1;
    } else {
      counter[size] = counter[size] + 1;
    }
  }
  return counter;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}
