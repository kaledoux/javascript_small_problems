/*You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString, or an expression such as '' + number. Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.*/

function integerToString(number) {
  if (number === 0) { return '0'};

  const numberBank = {0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 
                      5: '5', 6: '6', 7: '7', 8: '8', 9: '9'
  };

  let value = [];
  let remainder = 0;
  let processedNumber = number;

  while (processedNumber != 0) {
    remainder = processedNumber % 10;
    
    value.unshift(numberBank[remainder]);

    processedNumber = (processedNumber - remainder) /10;
  }
  return value.join('');
}

console.log(integerToString(4321));     
console.log(integerToString(0));         
console.log(integerToString(5000));  
