// Program to add element to start of an array


// --------------------method 1 ------------------

function addElementAtStart(arr,ele){
    return [ele, ...arr]
}

console.log(addElementAtStart([1,2,3,4,5],6))



// --------------------- method 2 --------------------

// function addElementAtStart(arr,ele){
//     arr.splice(0,0,ele)
//     return arr
// }

// console.log(addElementAtStart([1,2,3,4,5],6))

