/* eslint-disable consistent-return */
/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable no-mixed-operators */
// Valid parentheses
const isValid = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const top = stack[stack.length - 1];
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i]);
    }

    if (s[i] === ')' && top === '(' || s[i] === '}' && top === '{' || s[i] === ']' && top === '[') {
      stack.pop();
    }
  }
  if (stack.length === 0) {
    return true;
  }
  if (stack.length !== 0) {
    return false;
  }
};
console.log(isValid('()[]{}'));
