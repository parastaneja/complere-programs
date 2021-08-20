/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
// Palindrome Number

const isPalindrome = function (x) {
  x = x.toString();
  return x === x.split('').reverse().join('');
};
console.log(isPalindrome(121));
