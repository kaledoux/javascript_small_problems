function swapName(name) {
  let names = name.split(' ');
  return `${names[1]}, ${names[0]}`;
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
