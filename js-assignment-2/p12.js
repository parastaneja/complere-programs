/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable operator-assignment */
/* eslint-disable no-param-reassign */
// Plus one
const plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] = digits[i] + 1;
      return digits;
    }
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
};
console.log(plusOne([1, 2, 3, 4]));
