/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable consistent-return */
// Search insert position
const searchInsert = function (num, target) {
  for (i = 0; i < num.length; i++) {
    if (num[i] >= target) { return i; }
  }
};
console.log(searchInsert([1, 3, 5, 7], 5));
