// print sum of natural numbers using recursion

function sumOfNaturalNumbersUsingRecursion(num){
    if(num === 0){
        return 1
    }else{
        return num + sumOfNaturalNumbersUsingRecursion(num-1)
    }
}

console.log(sumOfNaturalNumbersUsingRecursion(5))