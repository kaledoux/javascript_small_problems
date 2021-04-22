
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

function signedIntegerToString(number) {
  let unsignedNumber = number;
  let sign = '';
  
  if (number < 0) {
    sign = '-';
    unsignedNumber *= -1;
  } else if (number > 0) {
    sign = '+';
  }
  let signedValue = sign + integerToString(unsignedNumber); 
  return signedValue;
}

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0)); 
