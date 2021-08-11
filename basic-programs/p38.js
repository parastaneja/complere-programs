/* eslint-disable array-callback-return */
// Program to extract given property values from object as array

const Obj = {
  name: 'rajan',
  phone: 9898989898,
  email: 'rajan1044872@gmail.com',
};

function getPropertyValue(object) {
  const arr = [];
  Object.values(object).map((item) => {
    arr.push(item);
  });
  console.log(arr);
}
getPropertyValue(Obj);
