//  program to find sum of natural  numbers

function sumOfNaturalNumberes(num){
    let result = 0
    while(num >= 1){
        result += num
        num--
    }
    return result
}

console.log(sumOfNaturalNumberes(2))