// Program to check if a number is positive , negative or zero

function checkNumber(num) {
  // if(num > 0){
  //     return "Positive number"
  // }else if(num < 0){
  //     return "Negative Number"
  // }else{
  //     return "Number is Zero"
  // }
  return num > 0 ? `${num} is a positive number`
    : num < 0 ? `${num} is a negative number` : `It is ${num}`;
}

console.log(checkNumber(2));
