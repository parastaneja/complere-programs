/* eslint-disable no-plusplus */
/* eslint-disable func-names */
// Longest common prefix
const longestCommonPrefix = function (str) {
  if (str.length === 0) { return ' '; }
  for (let i = 0; i < str[0].length; i++) {
    for (let j = 1; j < str.length; j++) {
      if (str[0][i] !== str[j][i]) {
        return str[0].slice(0, i);
      }
    }
  }
  return str[0];
};
console.log(longestCommonPrefix(['flower', 'flow']));
