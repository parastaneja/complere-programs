// Program to swap three numbers using third variable

function swap(n1,n2){
    let n3 = n2
    n2 = n1
    n1 = n3
    return(`(${n1},${n2})`)
}
console.log(swap(11,21))