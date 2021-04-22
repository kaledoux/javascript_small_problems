

function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

// The last line of debugIt() call the nested funciton logger(), which has access to the 
// constant status
