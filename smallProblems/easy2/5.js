/* the argument being passed in should be treated as the width
 * declare a variable for spaces
 *  this should start as width - 1
 * declare a variable for stars
 *  this should start as 1
 * loop until stars = width
 * log one line to the console with
 *  spaces number of spaces
 *  stars number of stars
 *  increment stars += 1
 *  decrement spaces -= 1
 */

function triangle(width) {
  let stars = 1;
  let spaces = width - stars;

  while (stars <= width) {
    console.log(`${' '.repeat(spaces)}${'*'.repeat(stars)}`)
    stars += 1;
    spaces -= 1;
  }
}

triangle(3);
triangle(5);
triangle(9);
triangle(6);
