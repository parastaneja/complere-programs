// Program to remove specific item from an array
let arr = [1,2,4,5,7]
function removeItem(arr,item){
    var result  = arr.filter((value) => {
        return value != item
    })
    return result
}

console.log(removeItem(arr,4))