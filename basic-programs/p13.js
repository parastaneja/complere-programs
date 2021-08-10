// program to print fibonacci series

function fibonacci(num){
    let n = 0;
    let n1 = 1;
    let n2
    console.log(n)
    console.log(n1)
    for(let i = 2; i < num; i++){
        n2 = n + n1
        console.log(n2)
        n = n1
        n1 = n2
        
    }
}


console.log(fibonacci(10))