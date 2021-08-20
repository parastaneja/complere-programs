/* eslint-disable radix */
/* eslint-disable no-param-reassign */
// Reverse Integer
const reverse = function (x) {
  let rev = 0;
  let pop;
  while (x !== 0) {
    pop = x % 10;
    x /= 10;
    x = parseInt(x);
    rev = rev * 10 + pop;
  }
  return rev;
};
console.log(reverse(123));
