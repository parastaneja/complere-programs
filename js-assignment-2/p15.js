/* eslint-disable consistent-return */
/* eslint-disable func-names */
/* eslint-disable no-restricted-syntax */
// Single Number
const singleNumber = function (nums) {
  const ht = {};
  for (const num of nums) {
    ht[num] = ht[num] + 1 || 1;
  }
  for (const key in ht) {
    if (ht[key] === 1) {
      return key;
    }
  }
};
console.log(singleNumber([4, 1, 2, 1, 2]));
