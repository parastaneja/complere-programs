// 40.  Program to get random item of an array
const arr1 = [1, 32, 5, 6, 2, 45, 22];

function getRandomItemFromArray(arr) {
  const a = Math.ceil(Math.random() * (arr.length - 1));
  console.log(arr[a]);
}

getRandomItemFromArray(arr1);
