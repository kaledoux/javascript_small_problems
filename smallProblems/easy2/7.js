/* first determine if the number is a doubledouble
 *  if the number is even it can be a doubledouble, odds cannot
 *  if even
 *    convert to string
 *    if slice of first half = slice of second half 
 *      return true
 *  else
 *    return false
 *
 * then if number is doubledouble, return it, else double it
*/

function double(number) {
  let stringNum = String(number);
  let half = Math.floor(stringNum.length / 2);
  
  if (stringNum.length % 2 !== 0) { return false };
  return (stringNum.slice(0, half) === stringNum.slice(half, stringNum.length));
}

function twice(num) {
  return double(num) ? num : num * 2;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));
