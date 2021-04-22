function swapChar(char) {
  return (/\w/).test(char) ? char : ' '; 
}

function cleanUp(line) {
  let lineArray = line.split('').map(letter => swapChar(letter));

  let newLine = lineArray.join('');
  let cleanLine = newLine[0];

  for (let i = 1; i < newLine.length; i++) {
    if (newLine[i] === ' ' && newLine[i -1] === ' ') {
      continue;
    } else {
      cleanLine += newLine[i];
    }
  }
  return cleanLine;
}
console.log(cleanUp("---what's my +*& line?"));
