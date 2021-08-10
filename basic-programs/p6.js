// Program to check the largest number among three numbers

function checkGreater(n1,n2,n3){
    // if(n1 > n2 && n1 > n3){
    //     return `${n1} is greater`
    // }else if(n2 > n3){
    //     return `${n2} is greater`
    // }else{
    //     return `${n3} is greater`
    // }

    return (n1 > n2) && (n1 > n3) ? `${n1} is greater`: (n2 > n3) ? `${n2} is greater` : `${n3} is greater`;
}

console.log(checkGreater(10,20,30))