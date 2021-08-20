/* eslint-disable func-names */
//  Length of Last Word
const lengthOfLastWord = function (s) {
  if (s.length === 0) {
    return 0;
  }
  const array = s.trim().split(' ');
  return array[array.length - 1].length;
};
console.log(lengthOfLastWord('hello World'));
