// Program to check that the number is Armstrong or not.

function checkArmStrong(num){
    let anotherNumber = num
    let power = num.toString().length
    let result = 0
    let remainder
    while(num > 0){
        remainder = parseInt(num % 10)
        result = parseInt(result + (remainder**power))
        num = parseInt(num/10)
    }
    return anotherNumber == result ? `${anotherNumber} is a ArmStrong number` : `${anotherNumber} is not a ArmStrong number`
}

console.log(checkArmStrong(1634))
console.log(checkArmStrong(153))
console.log(checkArmStrong(370))
console.log(checkArmStrong(121))

