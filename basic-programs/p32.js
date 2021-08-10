//  Program to empty an array

// ------------------- method 1 --------------------

function emptyArray(arr){
    for(let i = 0; i <= arr.length; i++){
        arr.splice(0,arr.length)
    }
    return arr
}

console.log(emptyArray([2,4,5,6,4,2,5,2]))


//  -------------------method 2 --------------------

// function emptyArray(arr){
//     arr.length = 0
//     return arr
// }
// console.log(emptyArray([2,4,5,6,4,2,5,2]))