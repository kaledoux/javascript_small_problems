function reverseWords(string) {
  let words = string.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      words[i] = reverse(words[i]);
    }
  }
  return words.join(' ');
}

function reverse(word) {
  return word.split('').reverse().join('');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"
