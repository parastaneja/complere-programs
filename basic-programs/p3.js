// Swap two numbers without using third variable

function swap(n1,n2){
    [n1,n2] = [n2,n1]
    return (`(${n1},${n2})`)
}
console.log(swap(1,2))