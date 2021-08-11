/* eslint-disable no-param-reassign */
// Program to add the item from front in an array.

const addElement = (arr) => {
  arr = [4, ...arr];
  console.log(arr);
};

addElement([1, 2, 3]);
