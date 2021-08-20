/* eslint-disable func-names */
/* eslint-disable no-plusplus */
// Implement strStr()
const strStr = function (haystack, needle) {
  if (needle.length === 0) { return 0; }
  if (needle === haystack) { return 0; }

  for (let i = 0; i <= haystack.length; i++) {
    if (needle === haystack.substring(i, i + needle.length)) { return i; }
  }
  return -1;
};
console.log(strStr('Hello', 'll'));