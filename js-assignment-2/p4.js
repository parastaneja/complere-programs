/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable no-bitwise */
// Roman To Integer
const roman = {
  I: 1, V: 5, x: 10, L: 50, C: 100, D: 500, M: 1000,
};

const romanToInt = function (S) {
  let ans = 0;
  for (let i = S.length - 1; ~i; i--) {
    const num = roman[S.charAt(i)];
    if (4 * num < ans) ans -= num;
    else ans += num;
  }
  return ans;
};
console.log(romanToInt('IV'));
