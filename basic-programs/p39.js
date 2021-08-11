/* eslint-disable no-plusplus */
// Program to compare elements of two arrays
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [1, 2, 7, 8, 5, 6];

function compareTwoArray(a, b) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        console.log(`${a[i]} = ${b[j]}`);
      }
    }
  }
}

compareTwoArray(arr1, arr2);
