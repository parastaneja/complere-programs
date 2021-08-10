// Program to print all prime numbers between 1-100.

function printPrimeNumbers(){
    let count = 0
    for(let i = 2; i <= 100; i++){
        for(let j = 2; j <= i; j++){
            if(i % j == 0){
                count++
            }
        }

        if(count == 1){
            console.log(i)
            count--
        }else{
            count = 0
        }      
    }
}

printPrimeNumbers()