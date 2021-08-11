// program to check if a variable is undefined or null

function variableCheck(variable) {
  if (variable == null) {
    console.log('The variable is undefined or null');
  } else {
    console.log('The variable is neither undefined nor null');
  }
}

let variableCall;

variableCheck(5);
variableCheck('Rajan');
variableCheck(null);
variableCheck(variableCall);
variableCheck(undefined);
