/* eslint-disable no-plusplus */
/* eslint-disable func-names */
// Add Binary
const addBinary = function (a, b) {
  const len1 = a.length;
  const len2 = b.length;
  const max = Math.max(len1, len2);
  let res = '';
  let carry = 0;
  let val = 0;

  for (let i = 0; i < max; i++) {
    val = Number(a[len1 - 1 - i] || 0) + Number(b[len2 - 1 - i] || 0) + carry;
    carry = Math.floor(val / 2);
    res = (val % 2) + res;
  }

  if (carry) res = 1 + res;

  return res;
};
console.log(addBinary('1010', '1011'));
