/* take starting number
 * declare a total variable
 * iterate from 1 to that number
 *  if the number is divisible by 3 or 5, add it to total
 *  return total
*/

function multisum(number) {
  let total = 0;
  for (let index = 1; index <= number; index++) {
    if (index % 5 === 0 || index % 3 === 0) { total += index };
  }
  return total;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168

