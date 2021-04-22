function makeDoubler(name) {
  return function(number) {
    console.log(`This function was called by ${name}.`);
    return number + number;
  }
}
const doubler = makeDoubler('Victor');
console.log(doubler(5));    
