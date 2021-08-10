// program to display multiplication table of a number

function displayMultiplicationTable(num){
    let result = ''
    for(let i = 1; i <= 10; i++){
            result += `${num} x ${i} = ${num*i} \n`
    }
    return result
}

console.log(displayMultiplicationTable(5))