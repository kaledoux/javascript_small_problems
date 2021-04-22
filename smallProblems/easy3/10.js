function wordSizes(words) {
  let counter = {};
  let splitWords = words.split(' ');
  for (let i = 0; i < splitWords.length; i++) {
    let size = wordSizeLetters(splitWords[i]);
    if (counter[size] === undefined) {
      counter[size] = 1;
    } else {
      counter[size] = counter[size] + 1;
    }
  }
  return counter;
}

function wordSizeLetters(word) {
  return word.split('').map(function(char) {
    if (/[a-zA-Z]/.test(char)) {
      return char;
    } else {
      return '';
    }
  }).join('').length
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}
