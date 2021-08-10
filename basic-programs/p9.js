// Program to check prime number

function checkPrime(num){
    let count = 0
    for(let i = 2; i <= num; i++){
        if(num % i == 0){
            count++
        }
    }
    return count == 1 ? `${num} is prime` : `${num} is not prime`
}

console.log(checkPrime(2))