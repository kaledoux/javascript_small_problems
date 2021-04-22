/* bannerize... ugh
 * define function for opening and closing lines
 * define function for spaced lines
 *
 * basic function will print opening, spacer, interpolated string; spacer, closing
*/

function mainLine(width) {
  console.log(`+-${'-'.repeat(width)}-+`);
}

function spacerLine(width) {
  console.log(`| ${' '.repeat(width)} |`);
}

function textLine(string) {
  console.log(`| ${string} |`);
}

function logInBox(string) {
  let stringWidth = string.length;

  mainLine(stringWidth);
  spacerLine(stringWidth);
  textLine(string);
  spacerLine(stringWidth);
  mainLine(stringWidth);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
logInBox('There once was...   ');
logInBox('  ');
