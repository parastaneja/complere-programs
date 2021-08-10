//  Program to remove duplicates from an array

function removeDuplicate(arr){
    let index = 0
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                arr.splice(j,1)
                j--
            }
        }
    }
    return arr
}

let array = [1,1,1,1,1,1,1,2,3,3,3,4,5,5,5,5,5,5,5,5,4,4,4,4,5,5,5]
console.log(removeDuplicate(array))