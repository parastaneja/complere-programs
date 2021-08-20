/* eslint-disable func-names */
/* eslint-disable no-plusplus */
const removeDuplicates = function (numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] === numbers[j]) {
        numbers.splice(j, 1);
        j = i;
      }
    }
  }
  return numbers;
};

const arr = [0, 0, 0, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4];
console.log(removeDuplicates(arr));
