function getLetter(average) {
  if (89 < average && average <= 100) {
    return 'A';
  } else if (79 < average && average < 90) {
    return 'B';
  } else if (69 < average && average  < 80) {
    return 'C';
  } else if (59 < average && average < 69) {
    return 'D';
  } else {
    return 'F';
  }
}

function getGrade(score1, score2, score3) {
  let total = (score1 + score2 + score3) / 3
  return getLetter(total);
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95)); 
